import { ItineraryDay, PricingDetails } from './types';

export const PRICING: PricingDetails = {
  pricePerPerson: 20000,
  currency: '₹',
};

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    day: 1,
    title: "Bangkok Arrival",
    description: "Welcome to Thailand! Arrival at Suvarnabhumi Airport and transfer to your luxury hotel. Evening free for leisure or explore the vibrant street markets.",
    imageSeed: "bangkok-skyline"
  },
  {
    day: 2,
    title: "Safari World & Marine Park",
    description: "A full day of adventure! Experience the open zoo at Safari World and enjoy spectacular shows like the Dolphin Show and Sea Lion Show at Marine Park.",
    imageSeed: "safari-zoo"
  },
  {
    day: 3,
    title: "Golden Buddha Temple",
    description: "Visit Wat Traimit to see the world's largest solid gold Buddha statue. Explore the rich history and spiritual heritage of Bangkok.",
    imageSeed: "golden-buddha"
  },
  {
    day: 4,
    title: "Pattaya Tiger Park",
    description: "Transfer to Pattaya. Visit the famous Tiger Park where you can see tigers up close in their natural habitat enclosures.",
    imageSeed: "tiger-park"
  },
  {
    day: 5,
    title: "Coral Island (Koh Larn)",
    description: "Speedboat trip to the beautiful Coral Island. Enjoy pristine white sands, clear waters, and water activities like parasailing and snorkeling.",
    imageSeed: "coral-island-beach"
  },
  {
    day: 6,
    title: "Return Journey",
    description: "After breakfast, check out and transfer to the airport for your flight back home with wonderful memories of Thailand.",
    imageSeed: "airport-departure"
  }
];

export const GALLERY_IMAGES = [
  "temple-wat",
  "thai-food",
  "floating-market",
  "elephant-sanctuary",
  "night-market",
  "beach-sunset"
];