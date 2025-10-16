'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import CareersForm from './CareersForm';
import CareersList from './CareersList';

export default function CareersManager() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCareers(data || []);
    } catch (error) {
      console.error('Error fetching careers:', error);
      alert('Error loading careers');
    } finally {
      setLoading(false);
    }
  };

  const handleAddCareer = () => {
    setEditingCareer(null);
    setShowForm(true);
  };

  const handleEditCareer = (career) => {
    setEditingCareer(career);
    setShowForm(true);
  };

  const handleDeleteCareer = async (id) => {
    if (!confirm('Are you sure you want to delete this career posting?')) return;

    try {
      const { error } = await supabase
        .from('careers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setCareers(careers.filter(c => c.id !== id));
      alert('Career posting deleted successfully');
    } catch (error) {
      console.error('Error deleting career:', error);
      alert('Error deleting career posting');
    }
  };

  const handleSaveCareer = async (careerData) => {
    try {
      if (editingCareer) {
        // Update existing career
        const { error } = await supabase
          .from('careers')
          .update(careerData)
          .eq('id', editingCareer.id);

        if (error) throw error;
        alert('Career posting updated successfully');
      } else {
        // Create new career
        const { error } = await supabase
          .from('careers')
          .insert([careerData]);

        if (error) throw error;
        alert('Career posting created successfully');
      }
      setShowForm(false);
      setEditingCareer(null);
      fetchCareers();
    } catch (error) {
      console.error('Error saving career:', error);
      alert('Error saving career posting');
    }
  };

  return (
    <div className="careers-manager">
      <div className="manager-header">
        <div>
          <h2 className="cs_primary_color">Career Postings</h2>
          <p className="cs_secondary_color">Manage your career opportunities</p>
        </div>
        <button
          className="cs_btn cs_style_1"
          onClick={handleAddCareer}
        >
          + New Career Posting
        </button>
      </div>

      {showForm && (
        <CareersForm
          career={editingCareer}
          onSave={handleSaveCareer}
          onCancel={() => {
            setShowForm(false);
            setEditingCareer(null);
          }}
        />
      )}

      {loading ? (
        <div className="loading">Loading careers...</div>
      ) : (
        <CareersList
          careers={careers}
          onEdit={handleEditCareer}
          onDelete={handleDeleteCareer}
        />
      )}
    </div>
  );
}

