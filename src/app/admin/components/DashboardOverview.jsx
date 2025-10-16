'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalServices: 0,
    activeServices: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      
      // Fetch blogs
      const { data: blogs, error: blogsError } = await supabase
        .from('blogs')
        .select('*', { count: 'exact' });
      
      // Fetch services
      const { data: services, error: servicesError } = await supabase
        .from('services')
        .select('*', { count: 'exact' });

      if (!blogsError && !servicesError) {
        setStats({
          totalBlogs: blogs?.length || 0,
          publishedBlogs: blogs?.filter(b => b.published)?.length || 0,
          totalServices: services?.length || 0,
          activeServices: services?.filter(s => s.active)?.length || 0,
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h2 className="cs_primary_color">Dashboard Overview</h2>
        <p className="cs_secondary_color">Welcome to your content management system</p>
      </div>

      <div className="stats-grid">
        {/* Total Blogs */}
        <div className="stat-card">
          <div className="stat-icon blog-icon">📝</div>
          <div className="stat-content">
            <h3 className="cs_secondary_color">Total Blog Posts</h3>
            <p className="stat-number cs_primary_color">{stats.totalBlogs}</p>
          </div>
        </div>

        {/* Published Blogs */}
        <div className="stat-card">
          <div className="stat-icon published-icon">✅</div>
          <div className="stat-content">
            <h3 className="cs_secondary_color">Published Posts</h3>
            <p className="stat-number cs_accent_color">{stats.publishedBlogs}</p>
          </div>
        </div>

        {/* Total Services */}
        <div className="stat-card">
          <div className="stat-icon service-icon">🏥</div>
          <div className="stat-content">
            <h3 className="cs_secondary_color">Total Services</h3>
            <p className="stat-number cs_primary_color">{stats.totalServices}</p>
          </div>
        </div>

        {/* Active Services */}
        <div className="stat-card">
          <div className="stat-icon active-icon">⚡</div>
          <div className="stat-content">
            <h3 className="cs_secondary_color">Active Services</h3>
            <p className="stat-number cs_accent_color">{stats.activeServices}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3 className="cs_primary_color">Quick Actions</h3>
        <div className="actions-grid">
          <div className="action-card">
            <h4>📝 Create Blog Post</h4>
            <p>Add a new blog post to your website</p>
            <button className="cs_btn cs_style_1">Create Post</button>
          </div>
          <div className="action-card">
            <h4>🏥 Add Service</h4>
            <p>Add a new medical service</p>
            <button className="cs_btn cs_style_1">Add Service</button>
          </div>
          <div className="action-card">
            <h4>📊 View Analytics</h4>
            <p>Check your content performance</p>
            <button className="cs_btn cs_style_1">View Stats</button>
          </div>
        </div>
      </div>
    </div>
  );
}

