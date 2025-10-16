import { useState } from 'react';
import { LayoutDashboard, BookOpen, Briefcase } from 'lucide-react';
import BlogManager from './components/BlogManager';
import ServiceManager from './components/ServiceManager';

type Tab = 'dashboard' | 'blogs' | 'services';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="text-blue-600" size={28} />
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'blogs'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen size={20} />
            Blogs
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'services'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Briefcase size={20} />
            Services
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Blog Management</h3>
                    <p className="text-sm text-gray-600">Create and manage blog posts</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('blogs')}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Manage Blogs →
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Briefcase className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Service Management</h3>
                    <p className="text-sm text-gray-600">Create and manage services</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="text-green-600 hover:text-green-800 font-medium text-sm"
                >
                  Manage Services →
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blogs' && <BlogManager />}
        {activeTab === 'services' && <ServiceManager />}
      </div>
    </div>
  );
}

export default App;
