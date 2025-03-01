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
    
    // Create the black hole effect with balanced brightness
    float brightness = smoothstep(0.5, 0.2, dist) * 0.85; // Slightly reduced brightness
    
    // More balanced color gradient - softer blue
    vec3 color = mix(
      vec3(0.02, 0.02, 0.04), // Slightly lighter black (very dark blue)
      vec3(0.08, 0.2, 0.6),   // Softer blue tone
      brightness
    );
    
    // Add time-based swirl with gentler effect
    float angle = atan(p.y, p.x);
    float swirl = sin(angle * 3.0 + time * 0.5) * 0.5 + 0.5;
    color += vec3(swirl * 0.08); // Gentler swirl effect
    
    // Add accretion disk with more balanced glow
    float disk = smoothstep(0.32, 0.31, dist) * smoothstep(0.3, 0.31, dist);
    vec3 diskColor = vec3(0.0, 0.7, 0.4); // Slightly softer green
    
    // Make disk subtler and more visually balanced
    color += diskColor * disk * (sin(angle * 16.0 + time * 1.8) * 0.4 + 0.6) * 0.8;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;