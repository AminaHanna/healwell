'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      alert('Error loading blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleAddBlog = () => {
    setEditingBlog(null);
    setShowForm(true);
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleDeleteBlog = async (id) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setBlogs(blogs.filter(b => b.id !== id));
      alert('Blog post deleted successfully');
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting blog post');
    }
  };

  const handleSaveBlog = async (blogData) => {
    try {
      if (editingBlog) {
        // Update existing blog
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', editingBlog.id);

        if (error) throw error;
        alert('Blog post updated successfully');
      } else {
        // Create new blog
        const { error } = await supabase
          .from('blogs')
          .insert([blogData]);

        if (error) throw error;
        alert('Blog post created successfully');
      }

      setShowForm(false);
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Error saving blog post');
    }
  };

  return (
    <div className="blog-manager">
      <div className="manager-header">
        <div>
          <h2 className="cs_primary_color">Blog Posts</h2>
          <p className="cs_secondary_color">Manage your blog content</p>
        </div>
        <button
          className="cs_btn cs_style_1"
          onClick={handleAddBlog}
        >
          + New Blog Post
        </button>
      </div>

      {showForm && (
        <BlogForm
          blog={editingBlog}
          onSave={handleSaveBlog}
          onCancel={() => {
            setShowForm(false);
            setEditingBlog(null);
          }}
        />
      )}

      {loading ? (
        <div className="loading">Loading blogs...</div>
      ) : (
        <BlogList
          blogs={blogs}
          onEdit={handleEditBlog}
          onDelete={handleDeleteBlog}
        />
      )}
    </div>
  );
}

