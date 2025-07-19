import tarotCardsData from "@/services/mockData/tarotCards.json";

class TarotService {
  constructor() {
    this.cards = [...tarotCardsData];
  }

  async delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getAllCards() {
    await this.delay();
    return [...this.cards];
  }

  async getRandomCards(count = 3) {
    await this.delay();
    const shuffled = [...this.cards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  async getCardById(id) {
    await this.delay();
    const numericId = parseInt(id);
    return this.cards.find(card => card.Id === numericId) || null;
  }

  generateReading(cards) {
    const positions = ["past", "present", "future"];
    const readings = {
      past: "Your digital journey began with curiosity and exploration. Past patterns shaped your current behavioral signature.",
      present: "Current data flows reveal your authentic self. The algorithms see your true nature through your interactions.",
      future: "Emerging patterns suggest transformation ahead. Your digital evolution continues to unfold in unexpected ways."
    };

    const cardsWithPositions = cards.map((card, index) => ({
      ...card,
      position: positions[index],
      reading: readings[positions[index]]
    }));

    const overallReading = "The digital cosmos has spoken through the cards. Your behavioral patterns align with ancient wisdom, revealing a path of conscious evolution in the networked age. Trust the process and embrace your unique digital destiny.";

    const advice = "Remember: every click is a choice, every scroll a step on your journey. The universe observes through pixels and responds through patterns. Stay curious, stay authentic, and let your digital soul guide you to new discoveries.";

    return {
      cards: cardsWithPositions,
      overall: overallReading,
      advice: advice,
      timestamp: new Date().toISOString()
    };
  }
}

export default new TarotService();