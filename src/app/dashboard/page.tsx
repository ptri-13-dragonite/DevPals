import React from 'react';
import ContainerMedium from '@/components/ContainerMed';
import LinkedInStats from '@/components/LinkedIn/LinkedInStats';
import LinkedInCard from '@/components/LinkedIn/LinkedInCard';
import LeetCodeSubmissionStats from '@/components/LeetCode/LeetCodeSubmissionStats';
import LeetCodeProblemStats from '@/components/LeetCode/LeetCodeProblemStats';
import LeetCodeDailyProblem from '@/components/LeetCode/LeetCodeDaily';
import GitHubCard from '@/components/GitHub/GitHubCard';
import GitHubStats from '@/components/GitHub/GitHubStats';

function Dashboard(): JSX.Element {
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

export default Dashboard;
