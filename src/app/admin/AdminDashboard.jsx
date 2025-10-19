'use client';

import React, { useState } from 'react';
import BlogManager from './components/BlogManager';
import ServiceManager from './components/ServiceManager';
import CareersManager from './components/CareersManager';
import DashboardOverview from './components/DashboardOverview';
import PageSettingsManager from './components/PageSettingsManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header">
        <div className="container-fluide">
          <div className="admin-header-content">
            <div className="admin-logo">
              <h1 className="cs_primary_color">HealWell Admin</h1>
              {/* <p className="cs_secondary_color">Content Management System</p> */}
            </div>
            <div className="admin-user">
              <span className="cs_secondary_color">Administrator</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="admin-nav">
        <div className="container-fluide">
          <div className="admin-nav-tabs">
            <button
              className={`admin-nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <span className="tab-icon">📊</span>
              Dashboard
            </button>
            <button
              className={`admin-nav-tab ${activeTab === 'blogs' ? 'active' : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              <span className="tab-icon">📝</span>
              Blog Posts
            </button>
            <button
              className={`admin-nav-tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              <span className="tab-icon">🏥</span>
              Services
            </button>
            <button
              className={`admin-nav-tab ${activeTab === 'careers' ? 'active' : ''}`}
              onClick={() => setActiveTab('careers')}
            >
              <span className="tab-icon">💼</span>
              Careers
            </button>
            <button
              className={`admin-nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="tab-icon">⚙️</span>
              Settings
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="admin-main">
        <div className="container-fluide">
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'blogs' && <BlogManager />}
          {activeTab === 'services' && <ServiceManager />}
          {activeTab === 'careers' && <CareersManager />}
          {activeTab === 'settings' && <PageSettingsManager />}
        </div>
      </main>
    </div>
  );
}

