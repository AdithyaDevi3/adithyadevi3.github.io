export const initialPortfolioEntries = [
  {
    id: 'ncr',
    name: 'NCR Voyix',
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
    accent: '#73e0ff'
  },
  {
    id: 'novae',
    name: 'Novae',
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
    accent: '#7fffd4'
  },
  {
    id: 'adobe',
    name: 'Adobe',
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
    accent: '#c29cff'
  },
  {
    id: 'research',
    name: 'Research',
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
    accent: '#8fe8ff'
  }
];

export const careerHighlights = [
  'Cross-platform product engineering',
  'Systems thinking and rapid prototyping',
  'Research-driven design and implementation',
  'Developer experience and polished interfaces'
];

export const initialConnections = [
  { id: 'conn-ncr-novae', fromId: 'ncr', toId: 'novae', color: '#4b7bff' },
  { id: 'conn-novae-adobe', fromId: 'novae', toId: 'adobe', color: '#2ec4b6' },
  { id: 'conn-adobe-research', fromId: 'adobe', toId: 'research', color: '#8b5cf6' }
];

export const defaultGalaxySettings = {
  backgroundStars: 120,
  nebulaCount: 3,
  shootingStarFrequency: 0.6
};

export function createPortfolioEntry(overrides = {}) {
  const id = `entry-${Math.random().toString(36).slice(2, 8)}`;
  return {
    id,
    name: 'New Experience',
    title: 'New role',
    period: 'Present',
    summary: 'Add a new company, project, or research milestone.',
    technologies: ['New Tech'],
    projects: [{ name: 'New Moon', summary: 'Describe the project or achievement.' }],
    color: '#4b7bff',
    orbitRadius: 7.2,
    orbitSpeed: 0.16,
    accent: '#73e0ff',
    ...overrides
  };
}

export function updatePortfolioEntry(entries, entryId, updates) {
  return entries.map((entry) => (entry.id === entryId ? { ...entry, ...updates } : entry));
}

export function reorderPortfolioEntry(entries, entryId, direction) {
  const index = entries.findIndex((entry) => entry.id === entryId);
  if (index < 0) return entries;
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= entries.length) return entries;
  const reordered = [...entries];
  const [entry] = reordered.splice(index, 1);
  reordered.splice(nextIndex, 0, entry);
  return reordered;
}

export function removePortfolioEntry(entries, entryId) {
  return entries.filter((entry) => entry.id !== entryId);
}

export function addProjectToEntry(entries, entryId, project) {
  return entries.map((entry) => (entry.id === entryId ? { ...entry, projects: [...entry.projects, project] } : entry));
}

export function removeProject(entries, entryId, projectIndex) {
  return entries.map((entry) => (entry.id === entryId ? { ...entry, projects: entry.projects.filter((_, index) => index !== projectIndex) } : entry));
}

export function updateProject(entries, entryId, projectIndex, updates) {
  return entries.map((entry) => {
    if (entry.id !== entryId) return entry;
    return {
      ...entry,
      projects: entry.projects.map((project, index) => (index === projectIndex ? { ...project, ...updates } : project))
    };
  });
}

export function createConnection(overrides = {}) {
  return {
    id: `conn-${Math.random().toString(36).slice(2, 8)}`,
    fromId: '',
    toId: '',
    color: '#4b7bff',
    ...overrides
  };
}

export function updateConnection(connections, connectionId, updates) {
  return connections.map((connection) => (connection.id === connectionId ? { ...connection, ...updates } : connection));
}

export function removeConnection(connections, connectionId) {
  return connections.filter((connection) => connection.id !== connectionId);
}

export const portfolioEntries = initialPortfolioEntries;
