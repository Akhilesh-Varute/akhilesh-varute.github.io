// components/Scene/shaders.js
export const blackHoleVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const blackHoleFragmentShader = `
  uniform float time;
  uniform float distortionIntensity;
  varying vec2 vUv;
  
  void main() {
    vec2 center = vec2(0.5, 0.5);
    vec2 p = vUv - center;
    float dist = length(p);
    
    float brightness = smoothstep(0.5, 0.2, dist) * 0.5;
    vec3 color = mix(vec3(0.01, 0.01, 0.02), vec3(0.05, 0.1, 0.3), brightness);
    float angle = atan(p.y, p.x);
    float swirl = sin(angle * 2.0 + time * 0.3) * 0.2 + 0.2;
    color += vec3(swirl * 0.03);
    float disk = smoothstep(0.32, 0.31, dist) * smoothstep(0.3, 0.31, dist);
    vec3 diskColor = vec3(0.0, 0.3, 0.15);
    color += diskColor * disk * (sin(angle * 10.0 + time * 1.0) * 0.15 + 0.3) * 0.4;
    
    gl_FragColor = vec4(color, 0.7); // Increased transparency
  }
`;