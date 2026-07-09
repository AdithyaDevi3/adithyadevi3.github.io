// All orbital objects in the unified galaxy
export const galaxyObjects = [
  // Career objects
  {
    id: 'ncr',
    name: 'NCR Voyix',
    type: 'career',
    title: 'Mobile Development Intern',
    period: 'Summer 2025',
    summary: 'Built resilient mobile systems for retail operations and connected commerce experiences.',
    technologies: ['React Native', 'Expo', 'GraphQL', 'TypeScript'],
    projects: [
      { name: 'Retail Mobility Platform', summary: 'Delivered polished mobile workflows for in-store operations.' },
      { name: 'API Integration Layer', summary: 'Connected commerce services with reliable data flows.' }
    ],
    color: '#4b7bff',
    orbitRadius: 6.7,
    orbitSpeed: 0.18,
    accent: '#73e0ff',
    size: 8
  },
  {
    id: 'novae',
    name: 'Novae',
    type: 'career',
    title: 'Software Engineering Intern',
    period: 'Summer 2024',
    summary: 'Contributed to event-driven systems and modern web interfaces for a fast-moving product team.',
    technologies: ['Spring Boot', 'Angular', 'Kafka', 'MongoDB'],
    projects: [
      { name: 'Streaming Integration Services', summary: 'Improved message-driven workflows and monitoring.' },
      { name: 'Internal Admin Console', summary: 'Shipped a cleaner operational dashboard experience.' }
    ],
    color: '#2ec4b6',
    orbitRadius: 8.8,
    orbitSpeed: 0.13,
    accent: '#7fffd4',
    size: 8
  },
  {
    id: 'adobe',
    name: 'Adobe',
    type: 'career',
    title: 'Developer Platforms Intern',
    period: 'Summer 2026',
    summary: 'Exploring developer tooling and platform experiences at the intersection of product and engineering.',
    technologies: ['Developer Platforms', 'APIs', 'Systems Design', 'Collaboration'],
    projects: [
      { name: 'Platform Experience Research', summary: 'Investigated scalable developer workflows and onboarding.' },
      { name: 'Tooling Improvements', summary: 'Helped shape a more coherent internal developer experience.' }
    ],
    color: '#8b5cf6',
    orbitRadius: 10.5,
    orbitSpeed: 0.11,
    accent: '#c29cff',
    size: 8
  },
  {
    id: 'research',
    name: 'Research',
    type: 'career',
    title: 'Undergraduate Research',
    period: 'Aug 2024 – May 2025',
    summary: 'Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.',
    technologies: ['Research', 'Materials', 'Neuroscience', 'Experimentation'],
    projects: [
      { name: 'Translational Glycomaterials', summary: 'Investigated biomaterials for neural repair applications.' },
      { name: 'Lab Systems Support', summary: 'Built reliable experimental and documentation workflows.' }
    ],
    color: '#1fb6d4',
    orbitRadius: 5.6,
    orbitSpeed: 0.22,
    accent: '#8fe8ff',
    size: 8
  },
  // Crystal as orbital object
  {
    id: 'crystal',
    name: 'Crystal Core',
    type: 'core',
    title: 'Interactive Crystal Animation',
    summary: 'A dynamic 3D icosahedron with animated edges and color-cycling waves.',
    technologies: ['Three.js', 'WebGL', 'React'],
    color: '#66e8ff',
    orbitRadius: 3.2,
    orbitSpeed: 0.08,
    accent: '#19c7b8',
    size: 10
  },
  // Scattered star/planet objects for Milky Way effect
  {
    id: 'star-1',
    name: 'Nova Prime',
    type: 'star',
    summary: 'A luminous stellar body orbiting in the outer regions.',
    color: '#ffffff',
    orbitRadius: 12,
    orbitSpeed: 0.09,
    accent: '#ffeb3b',
    size: 3
  },
  {
    id: 'star-2',
    name: 'Celestial Wanderer',
    type: 'star',
    summary: 'An independent star traversing the galactic plane.',
    color: '#ffc107',
    orbitRadius: 14,
    orbitSpeed: 0.07,
    accent: '#ffb300',
    size: 2
  },
  {
    id: 'planet-1',
    name: 'Terra Prime',
    type: 'planet',
    summary: 'An habitable world in the middle band of the galaxy.',
    color: '#4db8ff',
    orbitRadius: 9,
    orbitSpeed: 0.12,
    accent: '#00bfff',
    size: 5
  },
  {
    id: 'planet-2',
    name: 'Scarlet Titan',
    type: 'planet',
    summary: 'A gas giant with swirling atmospheres.',
    color: '#ff6b6b',
    orbitRadius: 11,
    orbitSpeed: 0.10,
    accent: '#ff4444',
    size: 6
  },
  {
    id: 'moon-1',
    name: 'Luna Echo',
    type: 'moon',
    summary: 'A small moon reflecting ancient light.',
    color: '#e0e0e0',
    orbitRadius: 7,
    orbitSpeed: 0.15,
    accent: '#b0b0b0',
    size: 2
  },
  {
    id: 'moon-2',
    name: 'Void Shadow',
    type: 'moon',
    summary: 'A mysterious moon orbiting in the shadows.',
    color: '#a8a8a8',
    orbitRadius: 13,
    orbitSpeed: 0.06,
    accent: '#808080',
    size: 2
  },
  {
    id: 'nebula-1',
    name: 'Nebula Veil',
    type: 'nebula',
    summary: 'A diffuse cloud of stellar material.',
    color: '#9366ff',
    orbitRadius: 15,
    orbitSpeed: 0.05,
    accent: '#7a4dd8',
    size: 4
  },
  {
    id: 'comet-1',
    name: 'Swift Comet',
    type: 'comet',
    summary: 'A fast-moving icy body with a glowing tail.',
    color: '#66ffff',
    orbitRadius: 16,
    orbitSpeed: 0.04,
    accent: '#33ffff',
    size: 3
  }
];

export const careerHighlights = [
  'Cross-platform product engineering',
  'Systems thinking and rapid prototyping',
  'Research-driven design and implementation',
  'Developer experience and polished interfaces'
];

export const galaxyConnections = [
  { id: 'conn-ncr-novae', fromId: 'ncr', toId: 'novae', color: '#4b7bff' },
  { id: 'conn-novae-adobe', fromId: 'novae', toId: 'adobe', color: '#2ec4b6' },
  { id: 'conn-adobe-research', fromId: 'adobe', toId: 'research', color: '#8b5cf6' }
];
