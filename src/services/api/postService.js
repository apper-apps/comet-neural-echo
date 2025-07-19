import postsData from "@/services/mockData/posts.json";
import sponsoredPostsData from "@/services/mockData/sponsoredPosts.json";
import triggerPostsData from "@/services/mockData/triggerPosts.json";

class PostService {
  constructor() {
    this.posts = [...postsData];
    this.sponsoredPosts = [...sponsoredPostsData];
    this.triggerPosts = [...triggerPostsData];
  }

  async delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getAllPosts() {
    await this.delay();
    return [...this.posts];
  }

  async getPostById(id) {
    await this.delay();
    const numericId = parseInt(id);
    return this.posts.find(post => post.Id === numericId) || null;
  }

  async getAllSponsoredPosts() {
    await this.delay();
    return [...this.sponsoredPosts];
  }

  async getSponsoredPostById(id) {
    await this.delay();
    const numericId = parseInt(id);
    return this.sponsoredPosts.find(post => post.Id === numericId) || null;
  }

  async getAllTriggerPosts() {
    await this.delay();
    return [...this.triggerPosts];
  }

  async getTriggerPostById(id) {
    await this.delay();
    const numericId = parseInt(id);
    return this.triggerPosts.find(post => post.Id === numericId) || null;
  }

  async likePost(id, isSponsored = false, isTrigger = false) {
    await this.delay(200);
    const numericId = parseInt(id);
    
    let targetArray;
    if (isTrigger) {
      targetArray = this.triggerPosts;
    } else if (isSponsored) {
      targetArray = this.sponsoredPosts;
    } else {
      targetArray = this.posts;
    }
    
    const post = targetArray.find(p => p.Id === numericId);
    if (post) {
      post.likes += 1;
      return { ...post };
    }
    return null;
  }

  async commentOnPost(id, comment, isSponsored = false, isTrigger = false) {
    await this.delay(200);
    const numericId = parseInt(id);
    
    let targetArray;
    if (isTrigger) {
      targetArray = this.triggerPosts;
    } else if (isSponsored) {
      targetArray = this.sponsoredPosts;
    } else {
      targetArray = this.posts;
    }
    
    const post = targetArray.find(p => p.Id === numericId);
    if (post) {
      post.comments += 1;
      return { ...post };
    }
    return null;
  }
}

export default new PostService();