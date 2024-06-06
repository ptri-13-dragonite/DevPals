/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

function PalEnv() {
  useEffect(() => {
    // HTMLCanvasElement
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/OBzWqD9Jh-uSqH9Z/scene.splinecode')
      .then(() => {
        console.log('Spline scene loaded');
      })
      .catch((error) => {
        console.error('Error loading Spline scene:', error);
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <h1 style={{ position: 'absolute', top: '20px', left: '20px', color: 'white' }}>PalEnv</h1>
      <canvas id="canvas3d" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default PalEnv;
