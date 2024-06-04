import React from 'react';
import ContainerMedium from '@/components/ContainerMed';
import LinkedInStats from '@/components/LinkedIn/LinkedInStats';
import LinkedInCard from '@/components/LinkedIn/LinkedInCard';
import LeetCodeStats from '@/components/LeetCode/LeetCodeStats';
import LeetCodeDailyProblem from '@/components/LeetCode/LeetCodeDaily';
import GitHubStats from '@/components/GitHub/GitHubStats';

function Dashboard(): JSX.Element {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-rows-3 gap-4">
        <ContainerMedium>
          <div className="flex flex-col lg:flex-row w-full gap-4">
            <div className="card bg-base-300 rounded-box p-4">
              <LinkedInCard />
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="card bg-base-300 rounded-box p-4">
              <LinkedInStats />
            </div>
          </div>
        </ContainerMedium>
        <ContainerMedium>
          <div className="flex flex-col lg:flex-row w-full gap-4">
            <div className="card bg-base-300 rounded-box p-4">
              <LeetCodeStats />
            </div>
            <div className="divider lg:divider-horizontal" />
            <div className="card bg-base-300 rounded-box p-4">
              <LeetCodeDailyProblem />
            </div>
          </div>
        </ContainerMedium>
        <ContainerMedium>
          <GitHubStats />
        </ContainerMedium>
      </div>
    </div>
  );
}

export default Dashboard;
