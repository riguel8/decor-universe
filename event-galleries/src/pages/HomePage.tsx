import HeroBanner from '../sections/HeroBanner';
import EventCategories from '../sections/EventCategories';
import GalleryShowcase from '../sections/GalleryShowcase';
import FeaturedPackages from '../sections/FeaturedPackages';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import BookingForm from '../sections/BookingForm';
import SocialFeed from '../sections/SocialFeed';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <EventCategories />
      <GalleryShowcase />
      <FeaturedPackages />
      <Services />
      <Testimonials />
      <SocialFeed />
      <BookingForm />
    </>
  );
}
