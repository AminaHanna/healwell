'use client';

import React from 'react';

export default function ServiceList({ services, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (services.length === 0) {
    return (
      <div className="empty-state">
        <p className="cs_secondary_color">No services yet. Create your first one!</p>
      </div>
    );
  }

  return (
    <div className="service-list">
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th className="cs_primary_color">Service Name</th>
              <th className="cs_primary_color">Price</th>
              <th className="cs_primary_color">Status</th>
              <th className="cs_primary_color">Order</th>
              <th className="cs_primary_color">Created</th>
              <th className="cs_primary_color">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td>
                  <div className="service-title">
                    <span className="service-icon">{service.icon || '🏥'}</span>
                    <div>
                      <h4 className="cs_primary_color">{service.title}</h4>
                      <p className="cs_secondary_color">{service.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="cs_secondary_color">{service.price || 'N/A'}</td>
                <td>
                  <span className={`status-badge ${service.active ? 'active' : 'inactive'}`}>
                    {service.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="cs_secondary_color">{service.display_order}</td>
                <td className="cs_secondary_color">{formatDate(service.created_at)}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => onEdit(service)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(service.id)}
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

