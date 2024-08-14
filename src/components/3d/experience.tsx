import { Environment, MeshReflectorMaterial, OrbitControls } from '@react-three/drei';
import React, { Fragment } from 'react';
import { Panel } from './models';

export function Experience() {
  return (
    <Fragment>
      <ambientLight intensity={0.7} />
      <Environment preset="sunset" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
          mirror={1}
        />
      </mesh>

      <Panel />
      <OrbitControls enabled={false} />
    </Fragment>
  );
}
