import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function MemberDetails() {
  const { id } = useParams(); // Grabs the ID from the URL
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        // Fetch the specific member using their ID
        const response = await axios.get(`http://localhost:5023/members/${id}`);
        setMember(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching member details:", error);
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Loading Profile...</h2>;
  if (!member) return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Member Not Found</h2>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '20px' }}>
      <div style={{ backgroundColor: 'white', color: 'black', borderRadius: '12px', overflow: 'hidden', width: '100%', maxWidth: '800px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
        
        {/* Top Banner with Image */}
        <div style={{ display: 'flex', backgroundColor: '#f8f9fa', padding: '30px', borderBottom: '2px solid #e9ecef', alignItems: 'center', gap: '30px' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#ccc', flexShrink: 0, border: '4px solid #1b3280' }}>
            {member.image ? (
              <img 
                src={encodeURI(`http://localhost:5023/${member.image.replace(/\\/g, '/')}`)} 
                alt={member.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : null}
          </div>
          <div>
            <h1 style={{ margin: '0 0 10px 0', color: '#1b3280', fontSize: '2.5rem' }}>{member.name}</h1>
            <p style={{ margin: 0, fontSize: '1.2rem', color: '#555' }}><strong>Roll Number:</strong> {member.rollNumber}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '1.1rem', color: '#555' }}><strong>Degree:</strong> {member.degree} ({member.year})</p>
          </div>
        </div>

        {/* Details Section */}
        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div>
            <h3 style={{ color: '#1b3280', borderBottom: '2px solid #1b3280', paddingBottom: '5px', display: 'inline-block' }}>Academic & Experience</h3>
            <p><strong>About Project:</strong> {member.aboutProject || 'N/A'}</p>
            <p><strong>Certificate:</strong> {member.certificate || 'N/A'}</p>
            <p><strong>Internship:</strong> {member.internship || 'N/A'}</p>
          </div>

          <div>
            <h3 style={{ color: '#1b3280', borderBottom: '2px solid #1b3280', paddingBottom: '5px', display: 'inline-block' }}>Personal</h3>
            <p><strong>Hobbies:</strong> {member.hobbies || 'N/A'}</p>
            <p><strong>About Your Aim:</strong> {member.aboutYourAim || 'N/A'}</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/view-members" className="btn-primary" style={{ backgroundColor: '#1b3280', color: 'white', padding: '12px 30px' }}>
              ← BACK TO TEAM
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}