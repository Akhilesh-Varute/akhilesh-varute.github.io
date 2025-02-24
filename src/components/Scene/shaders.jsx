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
    
    // Create the black hole effect
    float brightness = smoothstep(0.5, 0.2, dist);
    vec3 color = mix(
      vec3(0.0, 0.0, 0.0),
      vec3(0.1, 0.3, 1.0),
      brightness
    );
    
    // Add time-based swirl
    float angle = atan(p.y, p.x);
    float swirl = sin(angle * 3.0 + time * 0.5) * 0.5 + 0.5;
    color += vec3(swirl * 0.1);
    
    // Add accretion disk
    float disk = smoothstep(0.3, 0.29, dist) * smoothstep(0.28, 0.29, dist);
    color += vec3(0.0, 1.0, 0.6) * disk * (sin(angle * 20.0 + time * 2.0) * 0.5 + 0.5);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;