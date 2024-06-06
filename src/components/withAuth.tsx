import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

function withAuth(Component: React.FC) {
  return function AuthComponent(props: any): JSX.Element {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
