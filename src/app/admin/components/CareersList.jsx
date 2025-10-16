'use client';

import React from 'react';

export default function CareersList({ careers, onEdit, onDelete }) {
  if (careers.length === 0) {
    return (
      <div className="empty-state">
        <p className="cs_secondary_color">No career postings yet. Create your first one!</p>
      </div>
    );
  }

  return (
    <div className="careers-list">
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Job Type</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((career) => (
              <tr key={career.id}>
                <td>
                  <div className="career-title">
                    <h4 className="cs_primary_color">{career.title}</h4>
                    <p className="cs_secondary_color">{career.slug}</p>
                  </div>
                </td>
                <td className="cs_secondary_color">{career.department}</td>
                <td className="cs_secondary_color">{career.location}</td>
                <td>
                  <span className="status-badge active">{career.job_type}</span>
                </td>
                <td className="cs_secondary_color">{career.experience_level}</td>
                <td>
                  <span className={`status-badge ${career.active ? 'active' : 'inactive'}`}>
                    {career.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-edit"
                      onClick={() => onEdit(career)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(career.id)}
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

