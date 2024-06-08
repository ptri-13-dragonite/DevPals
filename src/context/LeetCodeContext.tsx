'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LeetCodeStats {
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  recentSubmission: {
    timestamp: string;
    title: string;
  };
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  prevRolling30: number;
  rolling30: number;
  difficulty: string;
  questionLink: string;
  questionTitle: string;
  tags: string[];
}

interface LeetCodeContextType {
  leetCodeContext: LeetCodeStats | null;
  isLoading: boolean;
  setLeetCodeContext: React.Dispatch<React.SetStateAction<LeetCodeStats | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeetCodeContext = createContext<LeetCodeContextType | undefined>(undefined);

interface LeetCodeProviderProps {
  children: ReactNode;
}

export function LeetCodeProvider({ children }: LeetCodeProviderProps): JSX.Element {
  const [leetCodeContext, setLeetCodeContext] = useState<LeetCodeStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LeetCodeContext.Provider value={{
      leetCodeContext, isLoading, setLeetCodeContext, setIsLoading,
    }}
    >
      {children}
    </LeetCodeContext.Provider>
  );
}

export const useLeetCode = (): LeetCodeContextType => {
  const context = useContext(LeetCodeContext);
  if (context === undefined) {
    throw new Error('useLeetCode must be used within a LeetCodeProvider');
  }
  return context;
};
