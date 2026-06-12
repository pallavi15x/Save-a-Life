import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import MythsPage from './pages/MythsPage';
import RegisterPage from './pages/RegisterPage';
import StoriesPage from './pages/StoriesPage';
import CampaignsPage from './pages/CampaignsPage';
import OrgPortalPage from './pages/OrgPortalPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import QuizPage from './pages/QuizPage';
import VerifyPage from './pages/VerifyPage';
import NotFound from './components/ui/NotFound';
import ScrollToTop from './components/ui/ScrollToTop';
import LoaderSplash from './components/ui/LoaderSplash';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router basename="/Save-a-Life">
          <ScrollToTop />
          <AnimatePresence mode="wait">
            {isLoading && <LoaderSplash onComplete={() => setIsLoading(false)} />}
          </AnimatePresence>

          {!isLoading && (
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/myths" element={<MythsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/campaigns" element={<CampaignsPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/verify" element={<VerifyPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/org-portal" element={<OrgPortalPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
