/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 panels.glb --shadows -k -K 
*/

import React, { useEffect } from 'react';
import {
  useGLTF,
  useAnimations,
  MeshTransmissionMaterial,
  Box,
  useTexture,
  Text,
} from '@react-three/drei';
import { FrontSide } from 'three';

export function Panel(props: any) {
  const group = React.useRef();
  const { nodes, materials: _materials, animations } = useGLTF('/models/panels.glb') as any;
  const { actions } = useAnimations(animations, group);

  const screenTexture = useTexture('/media/images/screen.png');
  const bannerTexture = useTexture('/media/images/banner.png');
  const boxTexture = useTexture('/media/images/box.png');

  const fontProps = {
    font: '/fonts/manrope/Manrope-SemiBold.ttf',
    fontSize: 0.25,
    letterSpacing: -0.06,
    lineHeight: 1,
    'material-toneMapped': false,
  };

  useEffect(() => {
    actions?.animation?.reset().fadeIn(0.2).play();

    return () => {
      actions?.animation?.fadeOut(0.2);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Ebene"
          castShadow
          receiveShadow
          geometry={nodes.Ebene.geometry}
          material={nodes.Ebene.material}
        />

        {/* small square */}
        <mesh
          name="Square_Image_Panel"
          castShadow
          receiveShadow
          geometry={nodes.Square_Image_Panel.geometry}
          material={nodes.Square_Image_Panel.material}
          position={[0.708, -0.79, 0.077]}
        >
          <meshStandardMaterial transparent opacity={0.8} />
          <Box args={[0.55, 0.55, 0.02]} position-z={0.01}>
            <meshStandardMaterial map={boxTexture} side={FrontSide} />
          </Box>
        </mesh>

        {/* small rectangle */}
        <mesh
          name="Wide_Image_Panel"
          castShadow
          receiveShadow
          geometry={nodes.Wide_Image_Panel.geometry}
          material={nodes.Wide_Image_Panel.material}
          position={[-0.315, -0.79, 0.077]}
        >
          <meshStandardMaterial transparent opacity={0.8} />
          <Box args={[1.3, 0.5, 0.02]} position-z={0.01}>
            <meshStandardMaterial map={bannerTexture} />
          </Box>
        </mesh>

        {/* giant rectangle */}
        <group
          position={[-0.009, 0.229, 0.088]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.972, 1, 0.655]}
        >
          <Text
            rotation={[-Math.PI / 2, 0, 0]}
            anchorY="bottom"
            anchorX="center"
            position-y={0.05}
            position-z={-1.1}
            {...fontProps}
            scale={[1, 1.3, 0]}
          >
            KD6-3.7
          </Text>

          <mesh
            name="Text_Panel001"
            castShadow
            receiveShadow
            geometry={nodes.Text_Panel001.geometry}
            material={nodes.Text_Panel001.material}
          >
            <meshStandardMaterial transparent opacity={0.8} />
          </mesh>

          <mesh>
            <Box args={[2, 2, 0.023086491972208023]} rotation-x={-Math.PI / 2} renderOrder={1}>
              {/* <meshBasicMaterial map={screenTexture} /> */}
              <MeshTransmissionMaterial
                samples={1}
                resolution={512}
                anisotropicBlur={0.1}
                thickness={0.1}
                roughness={0.4}
                toneMapped={true}
                map={screenTexture}
              />
            </Box>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/panels.glb');
