'use client';

import React, { useState, useEffect } from 'react';
import { uploadImage } from '@/lib/imageUpload';

export default function PageSettingsManager() {
  const [settings, setSettings] = useState({
    service_listing_bg: '',
  });
  const [imagePreview, setImagePreview] = useState({
    service_listing_bg: null,
  });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/page-settings?page_name=service_listing');
      const data = await response.json();

      if (data && Array.isArray(data)) {
        const settingsMap = {};
        data.forEach((setting) => {
          if (setting.setting_key === 'background_image') {
            settingsMap.service_listing_bg = setting.setting_value;
          }
        });
        setSettings(settingsMap);
        if (settingsMap.service_listing_bg) {
          setImagePreview({
            service_listing_bg: settingsMap.service_listing_bg,
          });
        }
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      setMessage('Error loading settings');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = async (e, settingKey) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const imageUrl = await uploadImage(file, 'page-settings');
      
      setImagePreview({
        ...imagePreview,
        [settingKey]: imageUrl,
      });
      
      setSettings({
        ...settings,
        [settingKey]: imageUrl,
      });

      setMessage('Image uploaded successfully');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage('Error uploading image');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    try {
      setUploading(true);
      
      // Save service listing background image
      if (settings.service_listing_bg) {
        const response = await fetch('/api/page-settings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page_name: 'service_listing',
            setting_key: 'background_image',
            setting_value: settings.service_listing_bg,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to save settings');
        }
      }

      setMessage('Settings saved successfully');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage('Error saving settings');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-settings-manager">
        <div className="settings-header">
          <h2 className="cs_primary_color">Page Settings</h2>
          <p className="cs_secondary_color">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-settings-manager">
      <div className="settings-header">
        <h2 className="cs_primary_color">Page Settings</h2>
        <p className="cs_secondary_color">Manage page-level configurations</p>
      </div>

      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <div className="settings-content">
        <div className="settings-card">
          <h3 className="cs_primary_color">Service Listing Page</h3>
          
          <div className="setting-item">
            <label className="cs_primary_color">Background Image</label>
            <p className="cs_secondary_color text-sm mb-3">
              Upload an image to customize the service listing page background
            </p>

            {imagePreview.service_listing_bg && (
              <div className="image-preview-container mb-3">
                <img
                  src={imagePreview.service_listing_bg}
                  alt="Service listing background preview"
                  className="image-preview"
                />
              </div>
            )}

            <div className="file-input-wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 'service_listing_bg')}
                disabled={uploading}
                id="service-bg-input"
              />
              <label htmlFor="service-bg-input" className="file-input-label">
                {uploading ? 'Uploading...' : 'Choose Image'}
              </label>
            </div>

            {settings.service_listing_bg && (
              <p className="cs_secondary_color text-sm mt-2">
                Current: {settings.service_listing_bg.split('/').pop()}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button
          className="cs_btn cs_style_1"
          onClick={handleSave}
          disabled={uploading}
        >
          {uploading ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  );
}

