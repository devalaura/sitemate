import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateIssue() {
    const [title] = useState('');
    const [description] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('https://sitemate-challenge-a93634c7b8db.herokuapp.com/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: title, details: description })
        });
        history('/');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Issue name:
                    <input name='name' type='text' />
                </label>
                <label>
                    Issue details:
                    <textarea name='details' />
                </label>
                <input name='submit' type='submit' />
            </form>
        </div>
    );
}