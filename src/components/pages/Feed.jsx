import React, { useState, useEffect } from "react";
import Post from "@/components/organisms/Post";
import SponsoredPost from "@/components/organisms/SponsoredPost";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import postService from "@/services/api/postService";
import ApperIcon from "@/components/ApperIcon";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [sponsoredPosts, setSponsoredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [welcomeText, setWelcomeText] = useState("");

  const welcomeMessage = "Welcome to Neural Echo - Where Digital Consciousness Meets Behavioral Analysis";

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // Typing animation for welcome message
    let index = 0;
    const timer = setInterval(() => {
      if (index <= welcomeMessage.length) {
        setWelcomeText(welcomeMessage.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const loadData = async () => {
    try {
      setError("");
      setLoading(true);
      
      const [postsData, sponsoredData] = await Promise.all([
        postService.getAllPosts(),
        postService.getAllSponsoredPosts()
      ]);
      
      setPosts(postsData);
      setSponsoredPosts(sponsoredData);
    } catch (err) {
      setError("Failed to load neural feed data");
      console.error("Error loading feed:", err);
    } finally {
      setLoading(false);
    }
  };

  const createMixedFeed = () => {
    const mixed = [];
    let postIndex = 0;
    let sponsoredIndex = 0;

    // Mix posts with sponsored content (every 3rd item is sponsored)
    for (let i = 0; i < posts.length + sponsoredPosts.length; i++) {
      if (i % 3 === 2 && sponsoredIndex < sponsoredPosts.length) {
        mixed.push({ type: "sponsored", data: sponsoredPosts[sponsoredIndex] });
        sponsoredIndex++;
      } else if (postIndex < posts.length) {
        mixed.push({ type: "regular", data: posts[postIndex] });
        postIndex++;
      }
    }

    return mixed;
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadData} />;
  if (posts.length === 0 && sponsoredPosts.length === 0) {
    return (
      <Empty 
        title="Neural Feed Initializing"
        description="No behavioral data streams detected. Begin interacting to populate your feed."
        action={loadData}
        actionText="Refresh Neural Network"
        icon="Radio"
      />
    );
  }

  const mixedFeed = createMixedFeed();

  return (
    <div className="max-w-2xl mx-auto py-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center shadow-xl">
        <h1 className="text-3xl font-bold mb-4 font-serif">
          {welcomeText}
          {welcomeText.length < welcomeMessage.length && (
            <span className="animate-pulse">|</span>
          )}
        </h1>
        <p className="text-lg opacity-90">
          Your digital behavior is being continuously analyzed for psychological insights
        </p>
        <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center">
            <ApperIcon name="Eye" className="h-4 w-4 mr-2" />
            <span>Active Monitoring</span>
          </div>
          <div className="flex items-center">
            <ApperIcon name="Brain" className="h-4 w-4 mr-2" />
            <span>Neural Analysis</span>
          </div>
          <div className="flex items-center">
            <ApperIcon name="Target" className="h-4 w-4 mr-2" />
            <span>Behavior Mapping</span>
          </div>
        </div>
      </div>

      {/* Mixed Feed */}
      <div className="space-y-6">
        {mixedFeed.map((item, index) => (
          <div key={`${item.type}-${item.data.Id}-${index}`}>
            {item.type === "sponsored" ? (
              <SponsoredPost post={item.data} />
            ) : (
              <Post post={item.data} />
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Decode Your Digital DNA?
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Join thousands of participants in the largest behavioral analysis experiment ever conducted. 
          Discover patterns you never knew existed in your digital interactions.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">€2,500</div>
            <div className="text-sm text-gray-500">per month</div>
          </div>
          <div className="text-gray-400">•</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">94.7%</div>
            <div className="text-sm text-gray-500">accuracy</div>
          </div>
          <div className="text-gray-400">•</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">1.2M+</div>
            <div className="text-sm text-gray-500">data points</div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Start Neural Analysis - €2,500/month
        </button>
      </div>
    </div>
  );
};

export default Feed;