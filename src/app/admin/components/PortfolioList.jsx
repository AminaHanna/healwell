'use client';

import React from 'react';

export default function PortfolioList({ portfolios, onEdit, onDelete, onToggleActive }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!portfolios || portfolios.length === 0) {
    return (
      <div className="empty-state">
        <p className="cs_secondary_color">No portfolio entries yet. Create your first case study!</p>
      </div>
    );
  }

  return (
    <div className="portfolio-list">
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th className="cs_primary_color">Title</th>
              <th className="cs_primary_color">Hospital/Client</th>
              <th className="cs_primary_color">Location</th>
              <th className="cs_primary_color">Category</th>
              <th className="cs_primary_color">Status</th>
              <th className="cs_primary_color">Order</th>
              <th className="cs_primary_color">Actions</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((portfolio) => (
              <tr key={portfolio.id}>
                <td>
                  <strong className="cs_primary_color">{portfolio.title}</strong>
                </td>
                <td className="cs_secondary_color">{portfolio.hospital_name}</td>
                <td className="cs_secondary_color">{portfolio.location}</td>
                <td>
                  <span className="status-badge">{portfolio.category}</span>
                </td>
                <td>
                  <button
                    className={`status-badge ${portfolio.active ? 'active' : 'inactive'}`}
                    onClick={() => onToggleActive(portfolio.id, !portfolio.active)}
                    title={portfolio.active ? 'Click to deactivate' : 'Click to activate'}
                    style={{ cursor: 'pointer', border: 'none', background: 'none', padding: '4px 8px' }}
                  >
                    {portfolio.active ? '✅ Active' : '❌ Inactive'}
                  </button>
                </td>
                <td className="cs_secondary_color">{portfolio.display_order}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => onEdit(portfolio)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(portfolio.id)}
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

