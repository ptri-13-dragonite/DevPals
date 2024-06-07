'use client';

import React, { useEffect } from 'react';
import LinkedInStats from '@/components/LinkedIn/LinkedInStats';
import LinkedInCard from '@/components/LinkedIn/LinkedInCard';
import LeetCodeSubmissionStats from '@/components/LeetCode/LeetCodeSubmissionStats';
import LeetCodeProblemStats from '@/components/LeetCode/LeetCodeProblemStats';
import LeetCodeDailyProblem from '@/components/LeetCode/LeetCodeDaily'; // Adjust import path if necessary
import GitHubCard from '@/components/GitHub/GitHubCard';
import GitHubStats from '@/components/GitHub/GitHubStats';
import { LeetCodeProvider, useLeetCode } from '@/components/LeetCodeContext';

async function fetchData(setLeetCodeContext, setIsLoading) {
  try {
    setIsLoading(true);

    const responseSubmissions = await fetch('/api/leetCode/Submissions');
    const responseMostRecent = await fetch('/api/leetCode/MostRecent');
    const responseDailyProblem = await fetch('/api/leetCode/DailyProblem');

    if (!responseSubmissions.ok || !responseMostRecent.ok || !responseDailyProblem.ok) {
      throw new Error('Failed to fetch');
    }

    const resSubmissions = await responseSubmissions.json();
    const resMostRecent = await responseMostRecent.json();
    const resDailyProblem = await responseDailyProblem.json();

    console.log(resSubmissions.data);
    console.log(resMostRecent.data);
    console.log(resDailyProblem.data);

    setLeetCodeContext({ ...resSubmissions.data, ...resMostRecent.data, ...resDailyProblem.data });
  } catch (error) {
    console.log('Error fetching LeetCode recent submission:', error);
  } finally {
    setIsLoading(false);
  }
}

function Dashboard(): JSX.Element {
  const { setLeetCodeContext, setIsLoading } = useLeetCode();

  useEffect(() => {
    fetchData(setLeetCodeContext, setIsLoading);
  }, [setLeetCodeContext, setIsLoading]);

  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="grid grid-rows-3 gap-4">
        {/* LinkedIn Section */}
        <div className="w-full p-4 bg-base-100 flex justify-center">
          <div className="container mx-auto flex flex-col lg:flex-row justify-center w-full p-4 gap-4 bg-base-300 rounded-2xl">
            <div className="card bg-primary rounded-box p-4">
              <LinkedInCard />
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="card bg-secondary rounded-box p-4">
              <LinkedInStats />
            </div>
          </div>
        </div>

        {/* Leetcode Section */}
        <div className="w-full p-4 bg-base-100 flex justify-center">
          <div className="container mx-auto flex flex-col lg:flex-row justify-center w-full p-4 gap-4 bg-base-300 rounded-2xl">
            <div className="card bg-accent rounded-box p-4">
              <LeetCodeSubmissionStats />
              <div className="mt-4" />
              <LeetCodeProblemStats />
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="card bg-base-content rounded-box p-4">
              <LeetCodeDailyProblem />
            </div>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="w-full p-4 bg-base-100 flex justify-center">
          <div className="container mx-auto flex flex-col lg:flex-row justify-center w-full p-4 gap-4 bg-base-300 rounded-2xl">
            <div className="card bg-secondary rounded-box p-4">
              <GitHubCard />
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="card bg-base-content rounded-box p-4">
              <GitHubStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <LeetCodeProvider>
      <Dashboard />
    </LeetCodeProvider>
  );
}
