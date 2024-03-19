import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const response = await fetch('https://sitemate-challenge-a93634c7b8db.herokuapp.com/');
    const data = await response.json();
    setIssues(data);
  };

  return (
    <div>
      <h1>Issues</h1>
      <ul>
        {issues.map(issue => (
        <div>
          <p>{issue.name}</p>
          <p>{issue.details}</p>
          <li key={issue._id}>
            <Link to={`/update/${issue._id}`}>{issue.title}</Link> | <Link to={`/delete/${issue._id}`}>Delete</Link>
          </li>
        </div>
        ))}
      </ul>
      <Link to="/create">Create New Issue</Link>
    </div>
  );
}
