import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import postService from "@/services/api/postService";

const SponsoredPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [isLiked, setIsLiked] = useState(false);
  const [showInsight, setShowInsight] = useState(false);
  const [typingText, setTypingText] = useState("");

  const generateProfileImage = (author) => {
    const seed = author.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `https://images.pexels.com/photos/${3184290 + (seed % 10)}/pexels-photo-${3184290 + (seed % 10)}.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop`;
  };

  // Typing animation for insight
  useEffect(() => {
    if (showInsight && post.insight) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= post.insight.length) {
          setTypingText(post.insight.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [showInsight, post.insight]);

  const handleLike = async () => {
    try {
      const updatedPost = await postService.likePost(post.Id, true);
      if (updatedPost) {
        setLikes(updatedPost.likes);
        setIsLiked(!isLiked);
      }
    } catch (error) {
      console.error("Error liking sponsored post:", error);
    }
  };

  const handleComment = async () => {
    try {
      const updatedPost = await postService.commentOnPost(post.Id, "Interested in learning more", true);
      if (updatedPost) {
        setComments(updatedPost.comments);
      }
    } catch (error) {
      console.error("Error commenting on sponsored post:", error);
    }
  };

  const handleLearnMore = () => {
    setShowInsight(!showInsight);
    // Smooth scroll to insight
    setTimeout(() => {
      if (!showInsight) {
        const element = document.getElementById(`insight-${post.Id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }, 100);
  };

  const getVariantStyles = () => {
    switch (post.variant) {
      case "sp1":
        return "from-blue-500 to-purple-500";
      case "sp2":
        return "from-purple-500 to-pink-500";
      case "sp3":
        return "from-pink-500 to-red-500";
      default:
        return "from-blue-500 to-purple-500";
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Sponsored Label */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2">
        <div className="flex items-center justify-between">
          <span className="text-white text-sm font-medium flex items-center">
            <ApperIcon name="Sparkles" className="h-4 w-4 mr-2" />
            Neural Experiment • Sponsored
          </span>
          <span className="text-white text-xs opacity-90">
            Variant: {post.variant.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={generateProfileImage(post.author)}
            alt={post.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{post.author}</h3>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {post.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-4">
          <button
            onClick={handleLearnMore}
            className={`w-full bg-gradient-to-r ${getVariantStyles()} text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
          >
            Learn More About Your Neural Patterns
          </button>
        </div>

        {/* Insight Section */}
        {showInsight && (
          <div 
            id={`insight-${post.Id}`}
            className="bg-gray-50 rounded-lg p-4 mb-4 animate-slideUp"
          >
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 rounded-full p-2 mt-1">
                <ApperIcon name="Brain" className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Behavioral Insight</h4>
                <p className="text-gray-700 font-mono text-sm">
                  {typingText}
                  {typingText.length < post.insight.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Interactions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
                isLiked 
                  ? "text-red-600 bg-red-50 hover:bg-red-100"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ApperIcon name="Heart" className="h-5 w-5" />
              <span className="text-sm font-medium">{likes}</span>
            </button>

            <button
              onClick={handleComment}
              className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <ApperIcon name="MessageCircle" className="h-5 w-5" />
              <span className="text-sm font-medium">{comments}</span>
            </button>
          </div>

          <div className="text-xs text-gray-500">
            Engagement Score: {Math.floor(Math.random() * 40 + 60)}%
          </div>
        </div>
      </div>
    </article>
  );
};

export default SponsoredPost;