import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const uniforms = {
  u_time: 0,
  u_resolution: new THREE.Vector2(0, 0),
};

const vertexShader = /* glsl */ `
  
  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec2 u_resolution;
  uniform float u_time;

  const int ammount = 12;

  void main() {
    vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);
    float len;

    for(int i = 0; i < ammount; i++){
        len = length(vec2(coord.x, coord.y));

        coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 9.0);
        coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 12.0);
    }

    gl_FragColor = vec4(
        cos(len * 12.3), cos(len - 2.3), cos(len - .1), 1.1
    ); 
}
`;

export const DoorMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader
);
