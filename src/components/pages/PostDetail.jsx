import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import postService from "@/services/api/postService";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      setError("");
      setLoading(true);
      
      const postData = await postService.getPostById(id);
      if (postData) {
        setPost(postData);
        setLikes(postData.likes);
        setComments(postData.comments);
      } else {
        setError("Post not found in neural network");
      }
    } catch (err) {
      setError("Failed to load post data");
      console.error("Error loading post:", err);
    } finally {
      setLoading(false);
    }
  };

  const generateProfileImage = (author) => {
    const seed = author.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `https://images.pexels.com/photos/${3184290 + (seed % 10)}/pexels-photo-${3184290 + (seed % 10)}.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`;
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
      const updatedPost = await postService.commentOnPost(post.Id, "Deep neural analysis response");
      if (updatedPost) {
        setComments(updatedPost.comments);
      }
    } catch (error) {
      console.error("Error commenting on post:", error);
    }
  };

  const handleShare = () => {
    console.log("Sharing post:", post.Id);
    navigator.clipboard.writeText(window.location.href);
    // Add toast notification here
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadPost} />;
  if (!post) return <Error message="Post not found" onRetry={loadPost} />;

  // Extended content for detailed view
  const extendedContent = `
    ${post.content}

    This fascinating exploration into human behavior reveals layers of complexity that most people never consider. 
    When we examine the intricate patterns of digital interaction, we uncover a rich tapestry of psychological indicators 
    that can predict future behaviors with remarkable accuracy.

    ## Key Insights

    The research demonstrates that every click, pause, and scroll tells a story about our underlying motivations and 
    cognitive processes. These micro-behaviors aggregate into comprehensive psychological profiles that reveal:

    - **Attention Patterns**: How long you focus on different types of content
    - **Decision Velocity**: The speed at which you make choices
    - **Emotional Triggers**: What content generates the strongest responses
    - **Social Dynamics**: How you interact with others' contributions

    ## Implications for the Future

    As we continue to map the digital consciousness, we're building a new understanding of human nature itself. 
    This research has profound implications for everything from education and therapy to marketing and social policy.

    The neural pathways activated during digital interactions mirror those used in face-to-face communication, 
    suggesting that our online selves are more authentic than previously believed.

    ## Ethical Considerations

    With great insight comes great responsibility. As we develop these analytical capabilities, we must ensure 
    they're used to enhance human well-being rather than exploit vulnerabilities. The goal is understanding, 
    not manipulation.

    What are your thoughts on the ethical implications of behavioral analysis? How do you feel about your 
    digital interactions being analyzed for psychological insights?
  `;

  return (
    <div className="max-w-3xl mx-auto py-6">
      {/* Back Navigation */}
      <Link 
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ApperIcon name="ArrowLeft" className="h-4 w-4 mr-2" />
        Back to Neural Feed
      </Link>

      {/* Post Content */}
      <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={generateProfileImage(post.author)}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
              <p className="text-gray-500">{post.timestamp}</p>
              <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <ApperIcon name="Eye" className="h-4 w-4 mr-1" />
                  Neural Analysis Active
                </span>
                <span className="flex items-center">
                  <ApperIcon name="Brain" className="h-4 w-4 mr-1" />
                  Behavioral Tracking: ON
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Image */}
        {post.imageUrl && (
          <div className="relative">
            <img
              src={post.imageUrl.replace("w=400", "w=800")}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            {extendedContent.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              } else if (paragraph.startsWith("- ")) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              } else {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>

        {/* Interactions */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-200 ${
                  isLiked 
                    ? "text-red-600 bg-red-50 hover:bg-red-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <ApperIcon name="Heart" className="h-5 w-5" />
                <span className="font-medium">{likes}</span>
                <span className="text-sm">Neural Resonance</span>
              </button>

              <button
                onClick={handleComment}
                className="flex items-center space-x-3 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-all duration-200"
              >
                <ApperIcon name="MessageCircle" className="h-5 w-5" />
                <span className="font-medium">{comments}</span>
                <span className="text-sm">Responses</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center space-x-3 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-all duration-200"
              >
                <ApperIcon name="Share2" className="h-5 w-5" />
                <span className="text-sm">Share Analysis</span>
              </button>
            </div>

            <div className="text-sm text-gray-500">
              Engagement Score: {Math.floor(Math.random() * 30 + 70)}%
            </div>
          </div>
        </div>
      </article>

      {/* Related Neural Insights */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Related Neural Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-gray-900 mb-2">Behavioral Pattern Match</h4>
            <p className="text-sm text-gray-600">
              Your reading pattern matches 87% with analytical personality types
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-gray-900 mb-2">Attention Metrics</h4>
            <p className="text-sm text-gray-600">
              Average focus time: 3.4 minutes • Deep engagement threshold reached
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;