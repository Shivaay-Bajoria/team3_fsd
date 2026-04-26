import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect runs automatically when this page loads
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Fetch the data from our Node backend (Port 5001)
        const response = await axios.get('http://localhost:5023/members');
        setMembers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching members:", error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <h2 style={{ color: 'white', textAlign: 'center' }}>Loading team members...</h2>;

  return (
    <div style={{ width: '100%', maxWidth: '1000px', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: 'white', letterSpacing: '2px', marginBottom: '40px' }}>
        MEET OUR AMAZING TEAM
      </h2>
      
      {/* Grid container for the cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        
        {members.length === 0 ? (
          <p style={{ color: 'white' }}>No members found. Go add some!</p>
        ) : (
          members.map((member) => (
            /* Individual Member Card */
            <div key={member._id} style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', overflow: 'hidden', width: '280px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', textAlign: 'center' }}>
              
              {/* Display the uploaded image. We point it to the backend's static uploads folder */}
              <div style={{ width: '100%', height: '200px', backgroundColor: '#e9ecef', overflow: 'hidden' }}>
                {member.image ? (
                  <img 
                    src={encodeURI(`http://localhost:5023/${member.image.replace(/\\/g, '/')}`)} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                ) : (
                  <p style={{ paddingTop: '80px', color: '#6c757d' }}>No Image</p>
                )}
              </div>

              {/* Member Info */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#1b3280' }}>{member.name}</h3>
                <p style={{ margin: '0 0 20px 0', color: '#555' }}>Roll Number: {member.rollNumber}</p>
                
                {/* Link to the dynamic details page using their MongoDB _id */}
                <Link to={`/member/${member._id}`} className="btn-primary" style={{ backgroundColor: '#1b3280', color: 'white', padding: '10px 20px', fontSize: '1rem', display: 'inline-block' }}>
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}