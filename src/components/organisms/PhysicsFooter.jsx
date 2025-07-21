import React, { useEffect, useRef, useState } from "react";

const PhysicsFooter = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const shapesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const dragRef = useRef({ shape: null, offsetX: 0, offsetY: 0 });

  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    setCtx(context);

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize shapes
    const colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
    const shapeTypes = ["circle", "square", "rounded-square"];

    for (let i = 0; i < 8; i++) {
      shapesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: 20 + Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        bounce: 0.7 + Math.random() * 0.2,
        friction: 0.98
      });
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!ctx) return;

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Clear canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw shapes
      shapesRef.current.forEach((shape) => {
        // Apply gravity
        if (!dragRef.current.shape || dragRef.current.shape !== shape) {
          shape.vy += 0.5; // gravity
          shape.vx *= shape.friction;
          shape.vy *= shape.friction;

          // Update position
          shape.x += shape.vx;
          shape.y += shape.vy;

          // Bounce off walls
          if (shape.x + shape.size > canvas.width || shape.x - shape.size < 0) {
            shape.vx *= -shape.bounce;
            shape.x = shape.x + shape.size > canvas.width ? canvas.width - shape.size : shape.size;
          }

          if (shape.y + shape.size > canvas.height || shape.y - shape.size < 0) {
            shape.vy *= -shape.bounce;
            shape.y = shape.y + shape.size > canvas.height ? canvas.height - shape.size : shape.size;
          }
        }

        // Draw shape
        ctx.fillStyle = shape.color;
        ctx.beginPath();

        switch (shape.type) {
          case "circle":
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
            break;
          case "square":
            ctx.rect(shape.x - shape.size, shape.y - shape.size, shape.size * 2, shape.size * 2);
            break;
          case "rounded-square":
            ctx.roundRect(shape.x - shape.size, shape.y - shape.size, shape.size * 2, shape.size * 2, 8);
            break;
        }

        ctx.fill();
      });

      // Draw text
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "24px Monaco, monospace";
      ctx.textAlign = "center";
ctx.fillText("✨ Drag the shapes. Observe. Interact. ✨", canvas.width / 2, 40);
      
      ctx.font = "16px Monaco, monospace";
      ctx.fillText("Your physics interactions are being analyzed for behavioral patterns", canvas.width / 2, 70);

animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ctx]);

  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const isPointInShape = (point, shape) => {
    const dx = point.x - shape.x;
    const dy = point.y - shape.y;
    return Math.sqrt(dx * dx + dy * dy) < shape.size;
  };

  const handleMouseDown = (e) => {
    const mousePos = getMousePos(e);
    mouseRef.current = { ...mousePos, isDown: true };

    // Find shape under mouse
    for (let i = shapesRef.current.length - 1; i >= 0; i--) {
      const shape = shapesRef.current[i];
      if (isPointInShape(mousePos, shape)) {
        dragRef.current = {
          shape: shape,
          offsetX: mousePos.x - shape.x,
          offsetY: mousePos.y - shape.y
        };
        break;
      }
    }
  };

  const handleMouseMove = (e) => {
    const mousePos = getMousePos(e);
    mouseRef.current = { ...mouseRef.current, ...mousePos };

    if (dragRef.current.shape) {
      dragRef.current.shape.x = mousePos.x - dragRef.current.offsetX;
      dragRef.current.shape.y = mousePos.y - dragRef.current.offsetY;
      dragRef.current.shape.vx = 0;
      dragRef.current.shape.vy = 0;
    }
  };

  const handleMouseUp = (e) => {
    if (dragRef.current.shape) {
      // Add some velocity based on mouse movement
      const mousePos = getMousePos(e);
      dragRef.current.shape.vx = (mousePos.x - mouseRef.current.x) * 0.2;
      dragRef.current.shape.vy = (mousePos.y - mouseRef.current.y) * 0.2;
    }

    mouseRef.current.isDown = false;
    dragRef.current = { shape: null, offsetX: 0, offsetY: 0 };
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        id="physics-canvas"
        className="w-full h-50 bg-black"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
    </div>
  );
};

export default PhysicsFooter;