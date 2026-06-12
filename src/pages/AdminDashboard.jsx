import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, Building2, BookOpen, Settings, Search, Eye, Trash2, CheckCircle, XCircle, Heart, MapPin, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';

const registrationData = [
  { date: 'Mar 1', registrations: 45 },
  { date: 'Mar 5', registrations: 52 },
  { date: 'Mar 10', registrations: 78 },
  { date: 'Mar 15', registrations: 65 },
  { date: 'Mar 20', registrations: 89 },
  { date: 'Mar 25', registrations: 95 },
  { date: 'Mar 30', registrations: 110 },
];

const organDistribution = [
  { name: 'Heart', value: 350, color: '#E24B4A' },
  { name: 'Kidneys', value: 520, color: '#7F77DD' },
  { name: 'Liver', value: 280, color: '#EF9F27' },
  { name: 'Eyes', value: 450, color: '#1D9E75' },
  { name: 'Skin', value: 180, color: '#F59E6B' },
  { name: 'Others', value: 220, color: '#378ADD' },
];

const stateData = [
  { state: 'Maharashtra', donors: 850 },
  { state: 'Delhi', donors: 720 },
  { state: 'Karnataka', donors: 650 },
  { state: 'Tamil Nadu', donors: 580 },
  { state: 'Gujarat', donors: 480 },
  { state: 'Kerala', donors: 420 },
];

const mockUsers = [
  { id: 1, name: 'Rahul Kumar', email: 'rahul@example.com', city: 'Delhi', bloodGroup: 'A+', organsPledged: 'Heart, Kidneys', date: '2024-03-15' },
  { id: 2, name: 'Priya Sharma', email: 'priya@example.com', city: 'Mumbai', bloodGroup: 'B+', organsPledged: 'All Organs', date: '2024-03-14' },
  { id: 3, name: 'Amit Singh', email: 'amit@example.com', city: 'Bangalore', bloodGroup: 'O+', organsPledged: 'Eyes', date: '2024-03-13' },
];

const mockCampaigns = [
  { id: 1, name: 'Run for Life', org: 'Health First NGO', city: 'Mumbai', date: '2024-03-20', status: 'pending' },
  { id: 2, name: 'Awareness Week', org: 'NOTTO', city: 'Delhi', date: '2024-03-25', status: 'pending' },
];

const mockOrgs = [
  { id: 1, name: 'Health First NGO', contact: 'contact@healthfirst.org', status: 'verified' },
  { id: 2, name: 'Life Savers Trust', contact: 'info@lifesavers.org', status: 'pending' },
  { id: 3, name: 'Hope Foundation', contact: 'hope@example.com', status: 'rejected' },
];

const mockStories = [
  { id: 1, name: 'Meera Krishnan', role: 'Living Donor', story: 'I donated a kidney to my mother...', status: 'pending' },
  { id: 2, name: 'Rahul Verma', role: 'Heart Recipient', story: 'Three years ago I was given 6 months...', status: 'approved' },
];

const tabs = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'campaigns', label: 'Campaigns', icon: Calendar },
  { id: 'organizations', label: 'Organizations', icon: Building2 },
  { id: 'stories', label: 'Stories', icon: BookOpen },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Donors', value: '5,24,892', change: '+12%', icon: Heart, color: 'text-life-red' },
    { label: 'Active Campaigns', value: '48', change: '+5', icon: Calendar, color: 'text-life-green' },
    { label: 'Pending Orgs', value: '12', change: '-3', icon: Building2, color: 'text-warm-amber' },
    { label: 'Stories Published', value: '284', change: '+18', icon: BookOpen, color: 'text-trust-blue' },
  ];

  return (
    <div className="min-h-screen bg-off-white dark:bg-gray-950 flex">
      <aside className="w-64 bg-deep-forest min-h-screen text-white fixed left-0 top-0 pt-4 hidden lg:block">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-life-red fill-life-red" />
            <span className="font-bold text-lg">Save a Life</span>
          </div>
          <p className="text-xs text-white/60 mt-1">Admin Dashboard</p>
        </div>
        <nav className="px-3">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left mb-1 transition-colors ${activeTab === tab.id ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
              <tab.icon className="w-5 h-5" />{tab.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-8 left-0 right-0 px-3">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg"><Settings className="w-5 h-5" />Settings</button>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-deep-forest dark:text-white">{activeTab === 'overview' ? 'Dashboard Overview' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-gray" />
            <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-life-green" />
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden flex overflow-x-auto gap-2 mb-6 pb-2">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === tab.id ? 'bg-life-green text-white' : 'bg-white dark:bg-gray-800 text-slate-gray'}`}>
              <tab.icon className="w-4 h-4" />{tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                    <span className="text-sm text-life-green font-medium">{stat.change}</span>
                  </div>
                  <p className="text-2xl font-bold text-deep-forest dark:text-white">{stat.value}</p>
                  <p className="text-sm text-slate-gray dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-deep-forest dark:text-white mb-4">Registration Trend</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={registrationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="date" stroke="#6B7280" fontSize={12} />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Tooltip />
                      <Line type="monotone" dataKey="registrations" stroke="#1D9E75" strokeWidth={2} dot={{ fill: '#1D9E75' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-deep-forest dark:text-white mb-4">Organ Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={organDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {organDistribution.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'users' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Name</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Email</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">City</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Blood</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 text-sm text-deep-forest dark:text-white">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-gray dark:text-gray-400">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-slate-gray dark:text-gray-400">{user.city}</td>
                      <td className="px-6 py-4 text-sm text-slate-gray dark:text-gray-400">{user.bloodGroup}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><Eye className="w-4 h-4 text-life-green" /></button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><Trash2 className="w-4 h-4 text-life-red" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'campaigns' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {mockCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-deep-forest dark:text-white">{campaign.name}</h3>
                    <p className="text-sm text-slate-gray dark:text-gray-400">{campaign.org} • {campaign.city}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-primary bg-life-green text-sm px-3 py-1"><CheckCircle className="w-4 h-4 inline mr-1" />Approve</button>
                    <button className="px-3 py-1 border border-life-red text-life-red rounded text-sm hover:bg-life-red hover:text-white"><XCircle className="w-4 h-4 inline mr-1" />Reject</button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'organizations' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Organization</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Contact</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Status</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {mockOrgs.map((org) => (
                    <tr key={org.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 text-sm text-deep-forest dark:text-white">{org.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-gray dark:text-gray-400">{org.contact}</td>
                      <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs ${org.status === 'verified' ? 'bg-life-green text-white' : org.status === 'pending' ? 'bg-warm-amber text-white' : 'bg-life-red text-white'}`}>{org.status}</span></td>
                      <td className="px-6 py-4 flex gap-2">
                        {org.status === 'pending' && (<><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><CheckCircle className="w-4 h-4 text-life-green" /></button><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><XCircle className="w-4 h-4 text-life-red" /></button></>)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-deep-forest dark:text-white mb-4">State-wise Donor Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stateData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" stroke="#6B7280" fontSize={12} />
                    <YAxis dataKey="state" type="category" stroke="#6B7280" fontSize={12} width={100} />
                    <Tooltip />
                    <Bar dataKey="donors" fill="#1D9E75" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'stories' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {mockStories.map((story) => (
              <div key={story.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-deep-forest dark:text-white">{story.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-mint-tint dark:bg-gray-800 text-medical-green">{story.role}</span>
                    <p className="text-sm text-slate-gray dark:text-gray-400 mt-2 line-clamp-2">{story.story}</p>
                  </div>
                  <div className="flex gap-2">
                    {story.status === 'pending' ? (<><button className="btn-primary bg-life-green text-sm px-3 py-1">Approve</button><button className="px-3 py-1 border border-life-red text-life-red rounded text-sm">Reject</button></>) : (<span className="text-xs px-2 py-1 rounded bg-life-green text-white">Published</span>)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
}
