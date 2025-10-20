'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import PortfolioForm from './PortfolioForm';
import PortfolioList from './PortfolioList';

export default function PortfolioManager() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState(null);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPortfolios(data || []);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
      alert('Error loading portfolio entries');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPortfolio = () => {
    setEditingPortfolio(null);
    setShowForm(true);
  };

  const handleEditPortfolio = (portfolio) => {
    setEditingPortfolio(portfolio);
    setShowForm(true);
  };

  const handleDeletePortfolio = async (id) => {
    if (!confirm('Are you sure you want to delete this portfolio entry?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('portfolio')
        .delete()
        .eq('id', id);

      if (error) throw error;
      alert('Portfolio entry deleted successfully');
      fetchPortfolios();
    } catch (error) {
      console.error('Error deleting portfolio:', error);
      alert('Error deleting portfolio entry');
    }
  };

  const handleToggleActive = async (id, active) => {
    try {
      const { error } = await supabase
        .from('portfolio')
        .update({ active })
        .eq('id', id);

      if (error) throw error;
      fetchPortfolios();
    } catch (error) {
      console.error('Error updating portfolio:', error);
      alert('Error updating portfolio entry');
    }
  };

  const handleSavePortfolio = async (portfolioData) => {
    try {
      if (editingPortfolio) {
        // Update existing portfolio
        const { error } = await supabase
          .from('portfolio')
          .update(portfolioData)
          .eq('id', editingPortfolio.id);

        if (error) throw error;
        alert('Portfolio entry updated successfully');
      } else {
        // Create new portfolio
        const { error } = await supabase
          .from('portfolio')
          .insert([portfolioData]);

        if (error) throw error;
        alert('Portfolio entry created successfully');
      }

      setShowForm(false);
      setEditingPortfolio(null);
      fetchPortfolios();
    } catch (error) {
      console.error('Error saving portfolio:', error);
      alert('Error saving portfolio entry');
    }
  };

  return (
    <div className="portfolio-manager">
      <div className="manager-header">
        <div>
          <h2 className="cs_primary_color">Portfolio / Case Studies</h2>
          <p className="cs_secondary_color">Manage your hospital case studies and portfolio entries</p>
        </div>
        <button
          className="cs_btn cs_style_1"
          onClick={handleAddPortfolio}
        >
          + New Case Study
        </button>
      </div>

      {showForm && (
        <PortfolioForm
          portfolio={editingPortfolio}
          onSave={handleSavePortfolio}
          onCancel={() => {
            setShowForm(false);
            setEditingPortfolio(null);
          }}
        />
      )}

      {loading ? (
        <div className="loading">Loading portfolio entries...</div>
      ) : (
        <PortfolioList
          portfolios={portfolios}
          onEdit={handleEditPortfolio}
          onDelete={handleDeletePortfolio}
          onToggleActive={handleToggleActive}
        />
      )}
    </div>
  );
}

