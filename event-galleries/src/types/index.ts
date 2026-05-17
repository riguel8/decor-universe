export interface EventCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  count: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  services: string[];
  featured?: boolean;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  eventType: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialPost {
  id: string;
  image: string;
  likes: number;
  caption: string;
}
