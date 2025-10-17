'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { supabase } from '@/lib/supabase';
import { uploadImage } from '@/lib/imageUpload';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function BlogForm({ blog, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    featured_image: '',
    published: false,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData(blog);
      if (blog.featured_image) {
        setImagePreview(blog.featured_image);
      }
    }
  }, [blog]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' && { slug: generateSlug(value) })
    }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
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
      const { publicUrl, error } = await uploadImage(file, 'blog-images', 'blog');

      if (error) {
        throw error;
      }

      setFormData(prev => ({
        ...prev,
        featured_image: publicUrl
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      alert('Please fill in all required fields');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="form-modal-overlay">
      <div className="form-modal">
        <div className="form-header">
          <h3 className="cs_primary_color">
            {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h3>
          <button className="close-btn" onClick={onCancel}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-group">
            <label className="cs_primary_color">Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="Auto-generated from title"
              disabled
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Author *</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Short summary of the blog post"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Content *</label>
            <div className="quill-editor-wrapper">
              <ReactQuill
                value={formData.content}
                onChange={handleContentChange}
                theme="snow"
                placeholder="Enter full blog content"
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                    ['link', 'image'],
                    ['clean']
                  ]
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Featured Image</label>
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

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="published"
              id="published"
              checked={formData.published}
              onChange={handleChange}
            />
            <label htmlFor="published" className="cs_secondary_color">
              Publish this blog post
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="cs_btn cs_style_2" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="cs_btn cs_style_1">
              {blog ? 'Update Blog' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

