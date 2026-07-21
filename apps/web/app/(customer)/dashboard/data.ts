export type RideOption = {
  id: string;
  label: string;
  description: string;
  eta: string;
  fare: string;
  riders: number;
  badge?: string;
  icon: string;
};

export type SavedPlace = {
  label: string;
  detail: string;
  icon: string;
};

export type RecentRide = {
  destination: string;
  origin: string;
  date: string;
  fare: string;
  status: string;
  accent: 'green' | 'orange';
};

export type CustomerDashboardData = {
  user: { name: string; city: string; avatar: string; notifications: number };
  membership: { memberSince: string; validTill: string };
  walletBalance: string;
  rideOptions: RideOption[];
  savedPlaces: SavedPlace[];
  offers: { title: string; description: string; icon: string }[];
  recentRides: RecentRide[];
};

export async function getCustomerDashboardData(): Promise<CustomerDashboardData> {
  return {
    user: { name: 'Harsh', city: 'Gurugram', avatar: '👨🏽', notifications: 3 },
    membership: { memberSince: '12 May 2024', validTill: '12 May 2025' },
    walletBalance: '₹1,250.00',
    rideOptions: [
      { id: 'bike', label: 'Bike', description: 'Quick & economical', eta: '3 min away', fare: '₹64', riders: 1, icon: '🛵' },
      { id: 'cab', label: 'Cab', description: 'Comfortable & reliable', eta: '5 min away', fare: '₹121', riders: 4, icon: '🚗', badge: 'Most Popular' },
      { id: 'auto', label: 'Auto', description: 'Affordable local rides', eta: '7 min away', fare: '₹91', riders: 3, icon: '🛺' },
    ],
    savedPlaces: [
      { label: 'Home', detail: '12, Green Park', icon: '⌂' },
      { label: 'Work', detail: 'Cyber City', icon: '▣' },
      { label: 'Airport', detail: 'IGI Airport T3', icon: '✈' },
      { label: 'Gym', detail: 'Cult Gym', icon: '↔' },
    ],
    offers: [
      { title: 'Weekend Rides', description: 'Get 15% off up to ₹100', icon: '%' },
      { title: 'Airport Special', description: 'Flat ₹120 off on airport rides', icon: '🎁' },
    ],
    recentRides: [
      { destination: 'Home', origin: 'Work, Cyber City', date: '12 May, 8:30 AM', fare: '₹124', status: 'Completed', accent: 'green' },
      { destination: 'Cyber Hub', origin: 'Home', date: '11 May, 9:15 PM', fare: '₹98', status: 'Completed', accent: 'orange' },
    ],
  };
}
