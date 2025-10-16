'use client';

import React from 'react';
import '../sass/admin.scss';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
};

export default AdminLayout;

