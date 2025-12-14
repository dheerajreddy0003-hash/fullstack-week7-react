
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export default function UsersPage() {
  const { data, isLoading } = useQuery(['users'], fetchUsers);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users (React Query)</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
