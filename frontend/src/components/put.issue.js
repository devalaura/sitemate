import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function UpdateIssue() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchIssue();
  }, []);

  const fetchIssue = async () => {
    const response = await fetch(`https://sitemate-challenge-a93634c7b8db.herokuapp.com/${id}`);
    const data = await response.json();
    setTitle(data.title);
    setDescription(data.description);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(`http://localhost:3000/issues/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });
    history('/');
  };

  return (
    <div>
      <h2>Update Issue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
