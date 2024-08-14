'use client';
import React, { Fragment } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from '@/components/3d/experience';

export default function Home() {
  return (
    <Fragment>
      <main className="app_container">
        <div className="app_canvas_container">
          <Canvas
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 1000,
              position: [0, 0, 4],
            }}
            gl={{ logarithmicDepthBuffer: true }}
          >
            <color attach="background" args={['#000']} />

            <Experience />
          </Canvas>
        </div>
      </main>
    </Fragment>
  );
}
