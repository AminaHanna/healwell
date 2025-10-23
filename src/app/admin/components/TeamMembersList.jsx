'use client';

import React from 'react';
import Image from 'next/image';

export default function TeamMembersList({ members, onEdit, onDelete, loading }) {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#636363' }}>
        <p>Loading team members...</p>
      </div>
    );
  }

  if (!members || members.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#636363' }}>
        <p>No team members found. Add your first team member to get started!</p>
      </div>
    );
  }

  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Position</th>
            <th>Order</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                {member.image_url ? (
                  <div style={{ width: '50px', height: '50px', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image
                      src={member.image_url}
                      alt={member.name}
                      width={50}
                      height={50}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#e8edf0',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#636363'
                  }}>
                    No Image
                  </div>
                )}
              </td>
              <td>
                <div className="team-title">
                  <h4>{member.name}</h4>
                </div>
              </td>
              <td>{member.position}</td>
              <td>{member.display_order}</td>
              <td>
                <span className={`status-badge ${member.is_active ? 'active' : 'inactive'}`}>
                  {member.is_active ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    onClick={() => onEdit(member)}
                    className="action-btn edit-btn"
                    title="Edit"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onDelete(member.id)}
                    className="action-btn delete-btn"
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
  );
}

