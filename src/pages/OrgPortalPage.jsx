import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, FileText, Settings, LogOut, AlertCircle, Plus, Edit2, Trash2, Upload, MapPin, Clock, CheckCircle, Building2, Phone, Mail, X } from 'lucide-react';
import { indianStates } from '../data/organData';

const mockEvents = [
  { id: 1, name: 'Organ Donation Awareness Camp', date: '2024-04-15', time: '10:00', city: 'Mumbai', state: 'Maharashtra', address: 'Municipal Hospital Grounds', description: 'Free health checkup and donor registration camp', maxVolunteers: 50, status: 'approved', registeredVolunteers: 32 },
  { id: 2, name: 'Youth Awareness Drive', date: '2024-04-20', time: '09:00', city: 'Pune', state: 'Maharashtra', address: 'FC Road Plaza', description: 'Street play and pamphlet distribution', maxVolunteers: 30, status: 'pending', registeredVolunteers: 0 }
];

const mockVolunteers = [
  { id: 1, name: 'Amit Sharma', phone: '9876543210', email: 'amit@example.com', event: 'Organ Donation Awareness Camp' },
  { id: 2, name: 'Priya Singh', phone: '9876543211', email: 'priya@example.com', event: 'Organ Donation Awareness Camp' },
];

export default function OrgPortalPage() {
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState(mockEvents);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', time: '', city: '', state: '', address: '', description: '', maxVolunteers: 20 });

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const event = { id: Date.now(), ...newEvent, status: 'pending', registeredVolunteers: 0 };
    setEvents([...events, event]);
    setShowCreateEvent(false);
    setNewEvent({ name: '', date: '', time: '', city: '', state: '', address: '', description: '', maxVolunteers: 20 });
  };

  const getStatusColor = (status) => {
    if (status === 'approved') return 'bg-life-green text-white';
    if (status === 'pending') return 'bg-warm-amber text-white';
    return 'bg-life-red text-white';
  };

  const tabs = [
    { id: 'events', label: 'My Events', icon: Calendar },
    { id: 'resources', label: 'Resources', icon: FileText },
    { id: 'volunteers', label: 'Volunteers', icon: Users },
    { id: 'profile', label: 'Profile', icon: Settings },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-off-white dark:bg-gray-950">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-deep-forest min-h-screen text-white fixed left-0 top-16 pt-6 hidden md:block">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Building2 className="w-6 h-6" /></div>
              <div>
                <h3 className="font-semibold">Health First NGO</h3>
                <div className="flex items-center gap-1 text-xs">
                  {isVerified ? <span className="text-life-green flex items-center gap-1"><CheckCircle className="w-3 h-3" />Verified</span> : <span className="text-warm-amber">Pending</span>}
                </div>
              </div>
            </div>
          </div>
          <nav className="px-3">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left mb-1 transition-colors ${activeTab === tab.id ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                <tab.icon className="w-5 h-5" />{tab.label}
              </button>
            ))}
          </nav>
          <div className="absolute bottom-8 left-0 right-0 px-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg"><LogOut className="w-5 h-5" />Logout</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6 md:p-8">
          {!isVerified && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-warm-amber/10 border border-warm-amber rounded-lg p-4 mb-6 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-warm-amber" />
              <p className="text-sm text-deep-forest dark:text-white">Your organization is pending verification. Some features may be limited.</p>
            </motion.div>
          )}

          {/* Mobile Tabs */}
          <div className="md:hidden flex overflow-x-auto gap-2 mb-6 pb-2">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === tab.id ? 'bg-life-green text-white' : 'bg-white dark:bg-gray-800 text-slate-gray'}`}>
                <tab.icon className="w-4 h-4" />{tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'events' && (
              <motion.div key="events" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-deep-forest dark:text-white">My Events</h1>
                  <button onClick={() => setShowCreateEvent(true)} className="btn-primary flex items-center gap-2"><Plus className="w-5 h-5" />Post New Event</button>
                </div>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-deep-forest dark:text-white">{event.name}</h3>
                            <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(event.status)}`}>{event.status}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-gray dark:text-gray-400">
                            <div className="flex items-center gap-1"><Calendar className="w-4 h-4 text-life-green" /><span>{new Date(event.date).toLocaleDateString('en-IN')}</span></div>
                            <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-life-green" /><span>{event.time}</span></div>
                            <div className="flex items-center gap-1"><MapPin className="w-4 h-4 text-life-green" /><span>{event.city}</span></div>
                            <div className="flex items-center gap-1"><Users className="w-4 h-4 text-life-green" /><span>{event.registeredVolunteers}/{event.maxVolunteers}</span></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"><Edit2 className="w-4 h-4 text-slate-gray" /></button>
                          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"><Trash2 className="w-4 h-4 text-life-red" /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'volunteers' && (
              <motion.div key="volunteers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className="text-2xl font-bold text-deep-forest dark:text-white mb-6">Volunteer Registrations</h1>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Name</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Contact</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Event</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {mockVolunteers.map((volunteer) => (
                        <tr key={volunteer.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="px-6 py-4 text-sm text-deep-forest dark:text-white">{volunteer.name}</td>
                          <td className="px-6 py-4 text-sm text-slate-gray dark:text-gray-400"><div>{volunteer.phone}</div><div className="text-xs">{volunteer.email}</div></td>
                          <td className="px-6 py-4 text-sm text-slate-gray dark:text-gray-400">{volunteer.event}</td>
                          <td className="px-6 py-4"><button className="text-life-green text-sm hover:underline">Contact</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'resources' && (
              <motion.div key="resources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className="text-2xl font-bold text-deep-forest dark:text-white mb-6">Resources</h1>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
                  <Upload className="w-12 h-12 mx-auto text-slate-gray mb-4" />
                  <p className="text-slate-gray dark:text-gray-400 mb-2">Upload and manage resources</p>
                  <p className="text-xs text-slate-gray dark:text-gray-500">PDF, PNG, JPG up to 10MB</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className="text-2xl font-bold text-deep-forest dark:text-white mb-6">Organization Profile</h1>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 max-w-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-mint-tint dark:bg-gray-800 flex items-center justify-center"><Building2 className="w-8 h-8 text-medical-green" /></div>
                    <div>
                      <h2 className="text-xl font-semibold text-deep-forest dark:text-white">Health First NGO</h2>
                      <span className={`text-sm ${isVerified ? 'text-life-green' : 'text-warm-amber'}`}>{isVerified ? 'Verified' : 'Pending'}</span>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Organization Name</label><input type="text" defaultValue="Health First NGO" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" /></div>
                      <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Registration Number</label><input type="text" defaultValue="NGO-12345-MH" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Email</label><input type="email" defaultValue="contact@healthfirst.org" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" /></div>
                      <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Phone</label><input type="tel" defaultValue="+91 9876543210" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" /></div>
                    </div>
                    <button className="btn-primary mt-4">Update Profile</button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Create Event Modal */}
      {showCreateEvent && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowCreateEvent(false)}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-deep-forest dark:text-white">Create New Event</h3>
              <button onClick={() => setShowCreateEvent(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Event Name *</label><input type="text" required value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" placeholder="Event name" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Date *</label><input type="date" required value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" /></div>
                <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Time *</label><input type="time" required value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">City *</label><input type="text" required value={newEvent.city} onChange={(e) => setNewEvent({ ...newEvent, city: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" placeholder="City" /></div>
                <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">State *</label><select required value={newEvent.state} onChange={(e) => setNewEvent({ ...newEvent, state: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"><option value="">Select</option>{indianStates.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
              </div>
              <div><label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">Max Volunteers</label><input type="number" value={newEvent.maxVolunteers} onChange={(e) => setNewEvent({ ...newEvent, maxVolunteers: parseInt(e.target.value) })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" /></div>
              <button type="submit" className="btn-primary w-full">Submit for Approval</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
