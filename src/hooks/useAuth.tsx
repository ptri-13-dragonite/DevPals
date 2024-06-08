// 'use client';

// import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
// import { useRouter } from 'next/router';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   isLoading: boolean;
// }

// const AuthContext = createContext<AuthContextType>({ isAuthenticated: false, isLoading: true });

// interface AuthProviderProps {
//   children: ReactNode;
// }

// function AuthProvider({ children }: AuthProviderProps): JSX.Element {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Only run fetchAuthStatus on client side
//     const fetchAuthStatus = async () => {
//       try {
//         // Simulating an API call for auth status
//         const response = await fetch('/api/auth/status'); // Replace with actual endpoint
//         if (!response.ok) {
//           throw new Error('Failed to fetch');
//         }
//         const data = await response.json();
//         setIsAuthenticated(data.isAuthenticated);
//       } catch (error) {
//         console.error('Failed to fetch authorization status of user', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     // Ensure this code only runs on the client
//     if (typeof window !== 'undefined') {
//       fetchAuthStatus();
//     }
//   }, [router]);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, isLoading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(AuthContext);
// }

// export { useAuth, AuthProvider };
