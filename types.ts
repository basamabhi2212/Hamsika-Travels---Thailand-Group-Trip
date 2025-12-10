export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  imageSeed: string; // Used to generate consistent random images
}

export interface PricingDetails {
  pricePerPerson: number;
  currency: string;
}

export interface BookingState {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
}