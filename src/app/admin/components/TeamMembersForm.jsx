'use client';

import React, { useState, useEffect } from 'react';
import { uploadImage } from '@/lib/imageUpload';

export default function TeamMembersForm({ member, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    image_url: '',
    bio: '',
    display_order: 0,
    is_active: true,
    social_links: {
      facebook: '',
      twitter: '',
      instagram: '',
      pinterest: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name || '',
        position: member.position || '',
        image_url: member.image_url || '',
        bio: member.bio || '',
        display_order: member.display_order || 0,
        is_active: member.is_active !== undefined ? member.is_active : true,
        social_links: member.social_links || {
          facebook: '',
          twitter: '',
          instagram: '',
          pinterest: '',
        },
      });
      if (member.image_url) {
        setImagePreview(member.image_url);
      }
    }
  }, [member]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSocialLinkChange = (platform, value) => {
    setFormData({
      ...formData,
      social_links: {
        ...formData.social_links,
        [platform]: value,
      },
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);

      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload to Supabase Storage using utility function
      const { publicUrl, error } = await uploadImage(file, 'team-images', 'team');

      if (error) {
        throw error;
      }

      setFormData(prev => ({
        ...prev,
        image_url: publicUrl
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        ...(member && { id: member.id }),
      };

      await onSave(payload);
    } catch (error) {
      console.error('Error saving team member:', error);
      alert('Error saving team member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-modal-overlay">
      <div className="form-modal">
        <div className="form-header">
          <h3 className="cs_primary_color">
            {member ? 'Edit Team Member' : 'Add Team Member'}
          </h3>
          <button className="close-btn" onClick={onCancel}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="team-form">
          <div className="form-group">
            <label className="cs_primary_color">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter team member name"
              required
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Position *</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="Enter position/role"
              required
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="cs_form_field"
            />
            {uploading && <p className="cs_secondary_color">Uploading image...</p>}
            {imagePreview && (
              <div className="image-preview" style={{ marginTop: '10px' }}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '8px' }}
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Enter team member bio"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Display Order</label>
            <input
              type="number"
              name="display_order"
              value={formData.display_order}
              onChange={handleInputChange}
              placeholder="Enter display order"
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Social Links</label>
            <div className="social-links-group">
              {['facebook', 'twitter', 'instagram', 'pinterest'].map((platform) => (
                <div key={platform} className="social-link-input">
                  <label>{platform.charAt(0).toUpperCase() + platform.slice(1)}</label>
                  <input
                    type="text"
                    value={formData.social_links[platform] || ''}
                    onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                    placeholder={`Enter ${platform} URL`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="is_active"
              id="is_active"
              checked={formData.is_active}
              onChange={handleInputChange}
            />
            <label htmlFor="is_active" className="cs_secondary_color">
              Active
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="cs_btn cs_style_2" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="cs_btn cs_style_1" disabled={loading || uploading}>
              {loading ? 'Saving...' : member ? 'Update Member' : 'Add Member'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

