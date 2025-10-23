'use client';

import React, { useState, useEffect } from 'react';
import TeamMembersForm from './TeamMembersForm';
import TeamMembersList from './TeamMembersList';

export default function TeamMembersManager() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/team-members');
      const data = await response.json();
      setMembers(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
      alert('Error loading team members');
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = () => {
    setEditingMember(null);
    setShowForm(true);
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDeleteMember = async (id) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const response = await fetch(`/api/team-members?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete team member');
      }

      setMembers(members.filter(m => m.id !== id));
      alert('Team member deleted successfully');
    } catch (error) {
      console.error('Error deleting team member:', error);
      alert('Error deleting team member');
    }
  };

  const handleSaveMember = async (memberData) => {
    try {
      const method = editingMember ? 'PUT' : 'POST';
      const response = await fetch('/api/team-members', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData),
      });

      if (!response.ok) {
        throw new Error('Failed to save team member');
      }

      alert(editingMember ? 'Team member updated successfully' : 'Team member created successfully');
      setShowForm(false);
      setEditingMember(null);
      fetchMembers();
    } catch (error) {
      console.error('Error saving team member:', error);
      alert('Error saving team member');
    }
  };

  return (
    <div className="team-members-manager">
      <div className="manager-header">
        <div>
          <h2>Team Members</h2>
          <p>Manage your team members</p>
        </div>
        {!showForm && (
          <button onClick={handleAddMember} className="cs_btn cs_style_1">
            + Add Team Member
          </button>
        )}
      </div>

      {showForm && (
        <TeamMembersForm
          member={editingMember}
          onSave={handleSaveMember}
          onCancel={() => {
            setShowForm(false);
            setEditingMember(null);
          }}
        />
      )}

      {!showForm && (
        <TeamMembersList
          members={members}
          onEdit={handleEditMember}
          onDelete={handleDeleteMember}
          loading={loading}
        />
      )}
    </div>
  );
}

