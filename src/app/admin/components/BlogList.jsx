'use client';

import React from 'react';

export default function BlogList({ blogs, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (blogs.length === 0) {
    return (
      <div className="empty-state">
        <p className="cs_secondary_color">No blog posts yet. Create your first one!</p>
      </div>
    );
  }

  return (
    <div className="blog-list">
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th className="cs_primary_color">Title</th>
              <th className="cs_primary_color">Author</th>
              <th className="cs_primary_color">Status</th>
              <th className="cs_primary_color">Created</th>
              <th className="cs_primary_color">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog.id}>
                <td>
                  <div className="blog-title">
                    <h4 className="cs_primary_color">{blog.title}</h4>
                    <p className="cs_secondary_color">{blog.slug}</p>
                  </div>
                </td>
                <td className="cs_secondary_color">{blog.author}</td>
                <td>
                  <span className={`status-badge ${blog.published ? 'published' : 'draft'}`}>
                    {blog.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="cs_secondary_color">{formatDate(blog.created_at)}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => onEdit(blog)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(blog.id)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

