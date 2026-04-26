import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h3 style={{ fontWeight: 'normal', color: '#ccc' }}>
        Welcome to the Team 3 Management Server
      </h3>
      
      <div style={{ 
        backgroundColor: '#1b3280', 
        padding: '30px', 
        borderRadius: '10px', 
        marginTop: '40px',
        display: 'inline-block'
      }}>
        <h3 style={{ margin: '0 0 20px 0', color: 'white' }}>Manage Team</h3>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {/* These Links act as the buttons required by the PDF */}
          <Link to="/add-member" className="btn-primary">Add Member</Link>
          <Link to="/view-members" className="btn-primary">View Members</Link>
        </div>
      </div>
    </div>
  );
}