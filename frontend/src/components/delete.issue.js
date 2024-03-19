import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function DeleteIssue() {
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    deleteIssue();
  }, []);

  const deleteIssue = async () => {
    await fetch(`https://sitemate-challenge-a93634c7b8db.herokuapp.com/${id}`, {
      method: 'DELETE'
    });
    history('/');
  };

  return <div>Deleting...</div>;
}

