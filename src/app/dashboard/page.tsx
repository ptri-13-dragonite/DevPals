import React from 'react';
import ContainerMedium from '@/components/ContainerMed';
import LinkedInStats from '@/components/LinkedIn/LinkedInStats';
import LeetCodeStats from '@/components/LeetCode/LeetCodeStats';
import LeetCodeDailyProblem from '@/components/LeetCode/LeetCodeDaily';
import GitHubStats from '@/components/GitHub/GitHubStats';

function Dashboard(): JSX.Element {
  return (
    <div>
      <ContainerMedium>
        <LinkedInStats />
      </ContainerMedium>
      <ContainerMedium>
        <LeetCodeStats />
        <LeetCodeDailyProblem />
      </ContainerMedium>
      <ContainerMedium>
        <GitHubStats />
      </ContainerMedium>
    </div>
  );
}

export default Dashboard;
