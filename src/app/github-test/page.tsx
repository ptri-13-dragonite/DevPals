'use client';

import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

function Page() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState({});
  const [totalCommits, setTotalCommits] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      //   console.log('session obj ->', session);
      //   console.log('token ->', session.accessToken);
    }
  }, [session]);

  const fetchGitHubUserData = async () => {
    if (session && session.accessToken) {
      try {
        const response = await fetch('/api/gitHub/userInfo', {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log('use data object ->', data);
        setUserData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUserData(null);
      }
    }
  };

  const fetchReposAndCommits = async () => {
    if (session && session.accessToken) {
      try {
        // Fetch user repositories
        const reposResponse = await fetch('/api/gitHub/repos', {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const reposData = await reposResponse.json();
        setRepos(reposData);

        // Fetch commits for each repo
        let totalCommitsCount = 0;
        const commitsData = {};

        for (const repo of reposData) {
          if (!repo.private) { // Only consider public repositories
            const commitsResponse = await fetch(`/api/gitHub/repos/${repo.owner.login}/${repo.name}/commits`, {
              headers: {
                Authorization: `Bearer ${session.accessToken}`,
              },
            });

            if (!commitsResponse.ok) {
              throw new Error('Failed to fetch commits');
            }

            const commits = await commitsResponse.json();
            commitsData[repo.name] = commits.commitCount;
            totalCommitsCount += commits.commitCount;
          }
        }

        setCommits(commitsData);
        setTotalCommits(totalCommitsCount);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRepos([]);
        setCommits({});
        setTotalCommits(0);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center">
      <p>GitHub Test Page</p>
      <button
        onClick={fetchGitHubUserData}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Fetch GitHub User Data
      </button>
      <button
        onClick={fetchReposAndCommits}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Fetch Repositories and Commits
      </button>
      {userData && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p><strong>Picture (url):</strong></p>
          <img
            src={userData.avatar_url}
            alt={`${userData.name}'s avatar`}
            className="rounded-full w-24 h-24"
          />
          <p>
            <strong>Name:</strong>
            {' '}
            {userData.name}
          </p>
          <p>
            <strong>Username:</strong>
            {' '}
            {userData.login}
          </p>

          <p>
            <strong>Public Repos:</strong>
            {' '}
            {userData.public_repos}
          </p>
          <p>
            <strong>Private Repos:</strong>
            {' '}
            {userData.total_private_repos}
          </p>
          <p>
            <strong>Owned Private Repos:</strong>
            {' '}
            {userData.owned_private_repos}
          </p>
          <p>
            <strong>Followers:</strong>
            {' '}
            {userData.followers}
          </p>
          <p>
            <strong>Following:</strong>
            {' '}
            {userData.following}
          </p>
        </div>
      )}
      {repos.length > 0 && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Public Repos</th>
                <th className="px-4 py-2">Commits</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((repo) => (
                <tr key={repo.id}>
                  <td className="border px-4 py-2">{repo.name}</td>
                  <td className="border px-4 py-2">{commits[repo.name] || 'Loading...'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4">
            <strong>Total Commits:</strong>
            {' '}
            {totalCommits}
          </p>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default Page;
