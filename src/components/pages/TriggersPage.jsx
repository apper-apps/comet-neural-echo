import React, { useState, useEffect } from "react";
import TriggerPost from "@/components/organisms/TriggerPost";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import postService from "@/services/api/postService";
import ApperIcon from "@/components/ApperIcon";

const TriggersPage = () => {
  const [triggerPosts, setTriggerPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadTriggerPosts();
  }, []);

  const loadTriggerPosts = async () => {
    try {
      setError("");
      setLoading(true);
      
      const data = await postService.getAllTriggerPosts();
      setTriggerPosts(data);
    } catch (err) {
      setError("Failed to load trigger analysis data");
      console.error("Error loading trigger posts:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadTriggerPosts} />;
  if (triggerPosts.length === 0) {
    return (
      <Empty 
        title="No Trigger Data Available"
        description="Trigger analysis experiments are currently being configured."
        action={loadTriggerPosts}
        actionText="Refresh Trigger Feed"
        icon="Zap"
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center mb-4">
          <ApperIcon name="Zap" className="h-8 w-8 mr-3" />
          <h1 className="text-3xl font-bold">Marketing Psychology Triggers</h1>
        </div>
        <p className="text-lg opacity-90 mb-6">
          Analyze the psychological mechanisms that drive consumer behavior and decision-making processes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold mb-1">89%</div>
            <div className="text-sm opacity-90">Average Response Rate</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold mb-1">247%</div>
            <div className="text-sm opacity-90">Conversion Increase</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold mb-1">15.3s</div>
            <div className="text-sm opacity-90">Average Decision Time</div>
          </div>
        </div>
      </div>

      {/* Trigger Posts */}
      <div className="space-y-6">
        {triggerPosts.map((post) => (
          <TriggerPost key={post.Id} post={post} />
        ))}
      </div>

      {/* Analysis CTA */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200 text-center">
        <div className="flex items-center justify-center mb-4">
          <ApperIcon name="Target" className="h-8 w-8 text-orange-500 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">
            Advanced Trigger Analysis
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Unlock the complete psychological framework behind these triggers. 
          Get detailed behavioral analysis and implementation strategies.
        </p>

        <div className="flex items-center justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">6</div>
            <div className="text-sm text-gray-500">Core Triggers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-1">156%</div>
            <div className="text-sm text-gray-500">Avg. Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">2.4s</div>
            <div className="text-sm text-gray-500">Response Time</div>
          </div>
        </div>

        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <ApperIcon name="Rocket" className="h-5 w-5 mr-2 inline" />
          Start Trigger Testing Analysis
        </button>

        <p className="text-xs text-gray-500 mt-4">
          All trigger interactions are monitored for behavioral pattern analysis
        </p>
      </div>
    </div>
  );
};

export default TriggersPage;