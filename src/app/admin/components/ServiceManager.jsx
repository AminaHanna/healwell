'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';

export default function ServiceManager() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      alert('Error loading services');
    } finally {
      setLoading(false);
    }
  };

  const handleAddService = () => {
    setEditingService(null);
    setShowForm(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleDeleteService = async (id) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setServices(services.filter(s => s.id !== id));
      alert('Service deleted successfully');
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Error deleting service');
    }
  };

  const handleSaveService = async (serviceData) => {
    try {
      if (editingService) {
        // Update existing service
        const { error } = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', editingService.id);

        if (error) throw error;
        alert('Service updated successfully');
      } else {
        // Create new service
        const { error } = await supabase
          .from('services')
          .insert([serviceData]);

        if (error) throw error;
        alert('Service created successfully');
      }

      setShowForm(false);
      setEditingService(null);
      fetchServices();
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Error saving service');
    }
  };

  return (
    <div className="service-manager">
      <div className="manager-header">
        <div>
          <h2 className="cs_primary_color">Services</h2>
          <p className="cs_secondary_color">Manage your medical services</p>
        </div>
        <button
          className="cs_btn cs_style_1"
          onClick={handleAddService}
        >
          + New Service
        </button>
      </div>

      {showForm && (
        <ServiceForm
          service={editingService}
          onSave={handleSaveService}
          onCancel={() => {
            setShowForm(false);
            setEditingService(null);
          }}
        />
      )}

      {loading ? (
        <div className="loading">Loading services...</div>
      ) : (
        <ServiceList
          services={services}
          onEdit={handleEditService}
          onDelete={handleDeleteService}
        />
      )}
    </div>
  );
}

