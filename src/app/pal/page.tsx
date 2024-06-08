'use client';

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

type PetType = 'racoon' | 'horse' | 'cat' | 'penguin';

export default function Pal() {
  const [activeScene, setActiveScene] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the selected pet from localStorage
    const selectedPet = localStorage.getItem('selectedPet') as PetType | null;
    const scenes: Record<PetType, string> = {
      racoon: 'https://prod.spline.design/s34NDkKPfziLTpIz/scene.splinecode',
      horse: 'https://prod.spline.design/CoYGbMm440MWfYpN/scene.splinecode',
      cat: 'https://prod.spline.design/TPcmcoHIRabun2uv/scene.splinecode',
      penguin: 'https://prod.spline.design/FoQ465IRez3gLQc8/scene.splinecode',
    };

    // Set the active scene based on the selected pet
    if (selectedPet && scenes[selectedPet]) {
      setActiveScene(scenes[selectedPet]);
    } else {
      console.error('No valid pet selected or no scene found for the selected pet.');
    }
  }, []);

  if (!activeScene) {
    return <div>Loading...</div>;
  }

  const handleLoad = (app) => {
    console.log('Spline scene loaded:', app);
    const scene = app._scene || app.scene;
    if (scene) {
      scene.traverse((object) => {
        console.log(`Object name: ${object.name}, Type: ${object.constructor.name}`);
      });
    } else {
      console.error('Scene is not available.');
    }
  };

  const handleError = (error) => {
    console.error('Error loading Spline scene:', error);
  };

  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <h1 style={{
        position: 'absolute', top: '20px', left: '20px', color: 'white',
      }}
      >
        PalEnv
      </h1>
      <Spline
        scene={activeScene}
        onLoad={handleLoad}
        onError={handleError}
      />
    </main>
  );
}
