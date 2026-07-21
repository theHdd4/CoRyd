export type City = {
  name: string;
  icon: string;
};

export type RiderBenefit = {
  title: string;
  description: string;
  icon: string;
};

export type MembershipPlan = {
  name: string;
  price: string;
  suffix: string;
  icon: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export type CustomerLandingData = {
  navItems: string[];
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    subscriptionCallout: string;
  };
  cities: City[];
  benefits: RiderBenefit[];
  plans: MembershipPlan[];
  footerLinks: string[][];
};

export async function getCustomerLandingData(): Promise<CustomerLandingData> {
  return {
    navItems: ['How it works', 'Membership', 'For Drivers', 'Cities', 'Help'],
    hero: {
      title: 'Better rides.\nBuilt around you.',
      description: 'CoRyd is a subscription-first mobility platform for bikes and taxis in your city. Lower fares. Priority rides. Greater savings.',
      primaryCta: 'Join CoRyd',
      secondaryCta: 'Watch how it works',
      subscriptionCallout: 'Subscription plans starting at ₹199/month',
    },
    cities: [
      { name: 'Bengaluru', icon: '♜' },
      { name: 'Hyderabad', icon: '♜' },
      { name: 'Pune', icon: '♜' },
      { name: 'Chennai', icon: '♜' },
    ],
    benefits: [
      { title: 'Lower fares', description: 'Pay less on every ride with member-only pricing.', icon: '◇' },
      { title: 'Priority rides', description: 'Faster pickups, every time you ride.', icon: 'ϟ' },
      { title: 'Exclusive benefits', description: 'Airport discounts, free cancellations and more.', icon: '▭' },
      { title: 'Safe & reliable', description: 'Verified drivers, live tracking and 24/7 support.', icon: '⬟' },
    ],
    plans: [
      { name: 'Basic', price: '₹199', suffix: '/month', icon: '✈', features: ['Lower fares', 'Priority support', 'Ride rewards'] },
      { name: 'Plus', price: '₹399', suffix: '/month', icon: '☆', highlighted: true, badge: 'Most popular', features: ['Everything in Basic', 'Free cancellations', 'Airport discounts', 'Extra ride rewards'] },
      { name: 'Pro', price: '₹699', suffix: '/month', icon: '♕', features: ['Everything in Plus', 'Premium support', 'Family rides', 'Top driver priority'] },
    ],
    footerLinks: [
      ['About us', 'Careers', 'Press'],
      ['Terms', 'Privacy', 'Refund policy'],
      ['Help center', 'Contact us', 'Safety'],
    ],
  };
}
