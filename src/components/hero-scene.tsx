"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

/**
 * Abstract sensor assembly: a threaded process connection, a stainless
 * barrel, a housing body and a connector head with a cable gland.
 *
 * Built from primitives rather than a downloaded model so the geometry
 * stays crisp at any zoom, adds no network weight, and can be recoloured
 * from the design tokens.
 */

const BRAND = "#0b4f8a";
const STEEL = "#c8d0d8";
const STEEL_DARK = "#8f9aa6";
const DARK = "#2a323c";

function Cable({ from, to, sag = 0.35 }: { from: [number, number, number]; to: [number, number, number]; sag?: number }) {
  const curve = useMemo(() => {
    const mid = new THREE.Vector3(
      (from[0] + to[0]) / 2,
      Math.min(from[1], to[1]) - sag,
      (from[2] + to[2]) / 2,
    );
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...from),
      mid,
      new THREE.Vector3(...to),
    );
  }, [from, to, sag]);

  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 40, 0.035, 10, false), [curve]);

  return (
    <mesh geometry={geometry} castShadow>
      <meshStandardMaterial color={DARK} roughness={0.85} metalness={0.05} />
    </mesh>
  );
}

function SensorAssembly({ pointer }: { pointer: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    target.current = { x: pointer.x, y: pointer.y };
  }, [pointer]);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Slow constant drift plus pointer parallax, eased so it never snaps.
    const drift = state.clock.elapsedTime * 0.16;
    const wantY = target.current.x * 0.5 + drift;
    const wantX = -target.current.y * 0.22 + Math.sin(drift * 0.7) * 0.045;
    group.current.rotation.y += (wantY - group.current.rotation.y) * Math.min(1, delta * 2.2);
    group.current.rotation.x += (wantX - group.current.rotation.x) * Math.min(1, delta * 2.2);
  });

  const threads = useMemo(() => {
    const items = [];
    const count = 11;
    for (let i = 0; i < count; i++) {
      items.push(i);
    }
    return items;
  }, []);

  return (
    <group ref={group} position={[0, -0.05, 0]}>
      {/* Threaded process connection */}
      <group position={[0, -1.02, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.28, 0.28, 0.62, 48]} />
          <meshStandardMaterial color={STEEL} roughness={0.28} metalness={0.92} />
        </mesh>
        {threads.map((i) => (
          <mesh key={i} position={[0, -0.28 + i * 0.055, 0]} castShadow>
            <torusGeometry args={[0.285, 0.022, 8, 40]} />
            <meshStandardMaterial color={STEEL_DARK} roughness={0.35} metalness={0.9} />
          </mesh>
        ))}
        {/* Hex nut at the base */}
        <mesh position={[0, -0.42, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 0.16, 6]} />
          <meshStandardMaterial color={STEEL} roughness={0.24} metalness={0.95} />
        </mesh>
      </group>

      {/* Probe tip */}
      <mesh position={[0, -1.52, 0]} castShadow>
        <cylinderGeometry args={[0.085, 0.085, 0.34, 32]} />
        <meshStandardMaterial color={STEEL} roughness={0.18} metalness={0.96} />
      </mesh>

      {/* Barrel / body */}
      <mesh position={[0, -0.12, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.52, 1.18, 64]} />
        <meshStandardMaterial color={STEEL} roughness={0.2} metalness={0.94} />
      </mesh>

      {/* Brand band */}
      <mesh position={[0, 0.02, 0]} castShadow>
        <cylinderGeometry args={[0.625, 0.625, 0.2, 64]} />
        <meshStandardMaterial color={BRAND} roughness={0.42} metalness={0.35} />
      </mesh>

      {/* Collar between body and head */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.44, 0.52, 0.12, 48]} />
        <meshStandardMaterial color={STEEL_DARK} roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Display head */}
      <group position={[0, 0.86, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.66, 0.58, 0.6, 64]} />
          <meshStandardMaterial color={DARK} roughness={0.62} metalness={0.2} />
        </mesh>
        {/* Display window */}
        <mesh position={[0, 0.02, 0.6]} rotation={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 0.04, 40]} />
          <meshStandardMaterial
            color="#0f1a24"
            roughness={0.12}
            metalness={0.3}
            emissive="#1a6fbc"
            emissiveIntensity={0.38}
          />
        </mesh>
        {/* Readout bars */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[-0.16 + i * 0.16, 0.02, 0.63]}>
            <boxGeometry args={[0.09, 0.02, 0.008]} />
            <meshStandardMaterial
              color="#79b4e9"
              emissive="#79b4e9"
              emissiveIntensity={1.5}
              toneMapped={false}
            />
          </mesh>
        ))}
        {/* Cap */}
        <mesh position={[0, 0.32, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.64, 0.1, 48]} />
          <meshStandardMaterial color={STEEL_DARK} roughness={0.3} metalness={0.9} />
        </mesh>
      </group>

      {/* Cable gland and cable */}
      <mesh position={[0.72, 0.86, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.16, 0.2, 0.26, 32]} />
        <meshStandardMaterial color={STEEL} roughness={0.3} metalness={0.9} />
      </mesh>
      <Cable from={[0.86, 0.86, 0]} to={[1.75, 0.15, 0.35]} sag={0.42} />
    </group>
  );
}

export function HeroScene() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  return (
    <div
      className="relative h-full w-full"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((e.clientX - r.left) / r.width) * 2 - 1,
          y: ((e.clientY - r.top) / r.height) * 2 - 1,
        });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.35, 5.4], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setReady(true)}
        className="!touch-pan-y"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[4, 6, 5]}
            intensity={2.1}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0006}
          />
          <directionalLight position={[-5, 2, -3]} intensity={1.1} color="#79b4e9" />
          <spotLight
            position={[0, 7, 2]}
            angle={0.7}
            penumbra={1}
            intensity={1.4}
            color="#ffffff"
          />
          <SensorAssembly pointer={pointer} />
          <ContactShadows
            position={[0, -1.72, 0]}
            opacity={0.42}
            scale={7}
            blur={2.6}
            far={3.4}
            color="#0a355c"
          />
          <Environment preset="city" environmentIntensity={0.35} />
        </Suspense>
      </Canvas>

      {/* Loading shimmer, removed once the canvas is live */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="h-40 w-40 animate-pulse rounded-full bg-brand-500/10" />
      </div>
    </div>
  );
}

export default HeroScene;
