import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, XCircle, Heart, Calendar, User, Droplet } from 'lucide-react';

export default function VerifyPage() {
  const [donorId, setDonorId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsSearching(true);

    // Simulate search - in real app, this would query Supabase
    setTimeout(() => {
      if (donorId.toUpperCase().startsWith('SAL-')) {
        setVerificationResult({
          found: true,
          name: 'Rahul Kumar',
          donorId: donorId.toUpperCase(),
          organs: ['Heart', 'Kidneys', 'Eyes'],
          date: '15 March 2024',
          city: 'Mumbai',
          bloodGroup: 'A+'
        });
      } else {
        setVerificationResult({ found: false });
      }
      setIsSearching(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-off-white dark:bg-gray-950 py-16"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-life-green/10 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-life-green" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white mb-4">
              Verify Donor ID
            </h1>
            <p className="text-slate-gray dark:text-gray-400">
              Enter a Donor ID to verify their registration status.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-gray" />
                <input
                  type="text"
                  value={donorId}
                  onChange={(e) => setDonorId(e.target.value.toUpperCase())}
                  placeholder="Enter Donor ID (e.g., SAL-ABC123)"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSearching ? 'Searching...' : 'Verify Donor'}
              </button>
            </form>

            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                {verificationResult.found ? (
                  <div className="border-t dark:border-gray-700 pt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-life-green flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-life-green font-semibold">Verified Donor</span>
                        <p className="text-sm text-slate-gray dark:text-gray-400">Registration confirmed</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-mint-tint dark:bg-gray-800 rounded-lg">
                        <User className="w-5 h-5 text-life-green" />
                        <div>
                          <p className="text-sm text-slate-gray dark:text-gray-400">Name</p>
                          <p className="font-medium text-deep-forest dark:text-white">{verificationResult.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-mint-tint dark:bg-gray-800 rounded-lg">
                        <Heart className="w-5 h-5 text-life-red" />
                        <div>
                          <p className="text-sm text-slate-gray dark:text-gray-400">Organs Pledged</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {verificationResult.organs.map((organ) => (
                              <span key={organ} className="px-2 py-0.5 bg-life-green text-white text-xs rounded-full">
                                {organ}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-mint-tint dark:bg-gray-800 rounded-lg">
                          <Calendar className="w-5 h-5 text-life-green" />
                          <div>
                            <p className="text-sm text-slate-gray dark:text-gray-400">Registered</p>
                            <p className="font-medium text-deep-forest dark:text-white">{verificationResult.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-mint-tint dark:bg-gray-800 rounded-lg">
                          <Droplet className="w-5 h-5 text-life-red" />
                          <div>
                            <p className="text-sm text-slate-gray dark:text-gray-400">Blood Group</p>
                            <p className="font-medium text-deep-forest dark:text-white">{verificationResult.bloodGroup}</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-center pt-4">
                        <p className="text-xs text-slate-gray dark:text-gray-400">
                          Donor ID: <span className="font-mono font-medium">{verificationResult.donorId}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 border-t dark:border-gray-700">
                    <XCircle className="w-12 h-12 mx-auto text-life-red mb-4" />
                    <p className="font-medium text-deep-forest dark:text-white mb-2">Donor Not Found</p>
                    <p className="text-sm text-slate-gray dark:text-gray-400">
                      No registration found with this Donor ID.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
