import fortuneMessagesData from "@/services/mockData/fortuneMessages.json";

class FortuneService {
  constructor() {
    this.messages = [...fortuneMessagesData];
  }

  async delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getAllMessages() {
    await this.delay();
    return [...this.messages];
  }

  async getRandomMessage() {
    await this.delay();
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return { ...this.messages[randomIndex] };
  }

  async getMessageById(id) {
    await this.delay();
    const numericId = parseInt(id);
    return this.messages.find(message => message.Id === numericId) || null;
  }
}

export default new FortuneService();