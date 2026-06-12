import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import BodyDiagram from '../components/home/BodyDiagram';
import OrganCards from '../components/home/OrganCards';
import Testimonials from '../components/home/Testimonials';
import IndiaDonorMap from '../components/home/IndiaDonorMap';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Hero />
      <Stats />
      <BodyDiagram />
      <OrganCards />
      <IndiaDonorMap />
      <Testimonials />
    </motion.div>
  );
}
