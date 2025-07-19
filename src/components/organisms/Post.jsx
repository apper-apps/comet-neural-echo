import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import postService from "@/services/api/postService";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [isLiked, setIsLiked] = useState(false);

  const generateProfileImage = (author) => {
    const seed = author.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `https://images.pexels.com/photos/${3184290 + (seed % 10)}/pexels-photo-${3184290 + (seed % 10)}.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop`;
  };

  const handleLike = async () => {
    try {
      const updatedPost = await postService.likePost(post.Id);
      if (updatedPost) {
        setLikes(updatedPost.likes);
        setIsLiked(!isLiked);
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async () => {
    try {
      const updatedPost = await postService.commentOnPost(post.Id, "Neural feedback received");
      if (updatedPost) {
        setComments(updatedPost.comments);
      }
    } catch (error) {
      console.error("Error commenting on post:", error);
    }
  };

  const handleShare = () => {
    console.log("Sharing post:", post.Id);
    // Add share functionality
  };

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
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
        <button className="text-gray-400 hover:text-gray-600">
          <ApperIcon name="MoreHorizontal" className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <Link 
          to={`/post/${post.Id}`}
          className="block hover:text-blue-600 transition-colors"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-700 leading-relaxed">
          {post.content}
        </p>
      </div>

      {/* Image */}
      {post.imageUrl && (
        <div className="mb-4">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg"
          />
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

          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ApperIcon name="Share2" className="h-5 w-5" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>

        <div className="text-xs text-gray-500">
          Neural Activity: {Math.floor(Math.random() * 100)}%
        </div>
      </div>
    </article>
  );
};

export default Post;