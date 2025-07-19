import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";
import postService from "@/services/api/postService";

const TriggerPost = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [isLiked, setIsLiked] = useState(false);

  const generateProfileImage = (author) => {
    const seed = author.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `https://images.pexels.com/photos/${3184290 + (seed % 10)}/pexels-photo-${3184290 + (seed % 10)}.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop`;
  };

  const handleLike = async () => {
    try {
      const updatedPost = await postService.likePost(post.Id, false, true);
      if (updatedPost) {
        setLikes(updatedPost.likes);
        setIsLiked(!isLiked);
      }
    } catch (error) {
      console.error("Error liking trigger post:", error);
    }
  };

  const handleComment = async () => {
    try {
      const updatedPost = await postService.commentOnPost(post.Id, "Interesting trigger analysis", false, true);
      if (updatedPost) {
        setComments(updatedPost.comments);
      }
    } catch (error) {
      console.error("Error commenting on trigger post:", error);
    }
  };

  const handleShare = () => {
    console.log("Sharing trigger post:", post.Id);
  };

  return (
    <article className="bg-white rounded-lg shadow-sm border border-orange-200 p-6 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
      {/* Trigger indicator */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-semibold">
        TRIGGER
      </div>

      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={generateProfileImage(post.author)}
          alt={post.author}
          className="w-10 h-10 rounded-full object-cover border-2 border-orange-200"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{post.author}</h3>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
        <div className="flex items-center space-x-1 text-orange-500">
          <ApperIcon name="Zap" className="h-4 w-4" />
          <span className="text-xs font-medium">TRIGGER</span>
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

      {/* Psychology Metrics */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ApperIcon name="Target" className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-semibold text-gray-900">Trigger Effectiveness</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-orange-600 font-bold">
              {Math.floor(Math.random() * 30 + 70)}% Response Rate
            </span>
            <span className="text-red-600 font-bold">
              {Math.floor(Math.random() * 20 + 40)}% Action Trigger
            </span>
          </div>
        </div>
      </div>

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

          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ApperIcon name="Share2" className="h-5 w-5" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>

        <div className="text-xs text-gray-500">
          Conversion Potential: {Math.floor(Math.random() * 30 + 60)}%
        </div>
      </div>
    </article>
  );
};

export default TriggerPost;