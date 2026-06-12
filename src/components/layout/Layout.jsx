import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from '../chatbot/Chatbot';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import CookieBanner from '../ui/CookieBanner';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-off-white dark:bg-gray-950 transition-colors">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
      <ScrollToTopButton />
      <CookieBanner />
    </div>
  );
}
