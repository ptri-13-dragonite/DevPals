import React from 'react';
import ContainerMedium from '@/components/ContainerMed';
import LinkedInStats from '@/components/LinkedIn/LinkedInStats';
import LinkedInCard from '@/components/LinkedIn/LinkedInCard';
import LeetCodeStats from '@/components/LeetCode/LeetCodeStats';
import LeetCodeDailyProblem from '@/components/LeetCode/LeetCodeDaily';
import GitHubStats from '@/components/GitHub/GitHubStats';

function Dashboard(): JSX.Element {
  return (
    <div className="min-h-screen p-4 bg-base-100">
      <div className="grid grid-rows-3 gap-6">
        {/* LinkedIn Section */}
        <div className="w-full p-4 bg-base-100">
          <div className="container mx-auto flex flex-col lg:flex-row w-full p-4 gap-4 bg-base-300 rounded-2xl">
            <div className="card bg-accent rounded-box p-4 flex-grow">
              <LinkedInCard />
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="card bg-base-100 rounded-box p-4 bg-primary flex-grow">
              <LinkedInStats />
            </div>
          </div>
        </div>
        {/* Leetcode Section */}
        <div className="w-full p-4 bg-base-100">
          <div className="container mx-auto flex flex-col lg:flex-row w-full p-4 gap-4 bg-base-300 rounded-2xl">
            <div className="card bg-base-100 rounded-box p-4 bg-secondary flex-grow">
              <LeetCodeStats />
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="card bg-base-100 rounded-box p-4 flex-grow">
              <LeetCodeDailyProblem />
            </div>
          </div>
        </div>
        {/* GitHub Section */}
        <div className="w-full p-4 bg-base-100">
          <GitHubStats />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
