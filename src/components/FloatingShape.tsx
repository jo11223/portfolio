import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

export const FloatingShape = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};
