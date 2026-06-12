import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-forest dark:bg-gray-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-white max-w-md"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mb-8"
        >
          <Heart className="w-32 h-32 mx-auto text-life-red fill-life-red opacity-80" />
        </motion.div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          This page doesn't exist, but your decision to donate can give someone a second chance at life.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home className="w-5 h-5" />
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
