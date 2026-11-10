export const initialPortfolioEntries = [
  {
    id: 'ncr',
    name: 'NCR Voyix',
    title: 'Software Engineering Intern, Mobile Development',
    period: 'May 2025 – August 2025',
    location: 'Atlanta, GA',
    summary: 'Built a cross-platform e-commerce loyalty experience across mobile, web, and kiosks.',
    technologies: ['React Native', 'React', 'GraphQL', 'Expo'],
    projects: [
      { name: 'Loyalty Platform', summary: 'Developed a full-stack e-commerce loyalty platform for all-inclusive ordering using React Native and GraphQL.' },
      { name: 'GraphQL Integration', summary: 'Integrated a GraphQL API into a React Native e-commerce application with 20+ screens.' },
      { name: 'Cross-platform Deployment', summary: 'Deployed one shared codebase across iOS, Android, web, and kiosks.' }
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
    period: 'June 2024 – July 2024',
    location: 'Markle, IN',
    summary: 'Built a real-time log analytics pipeline processing more than one million logs.',
    technologies: ['Spring Boot', 'Angular', 'MongoDB', 'Chart.js', 'Kafka'],
    projects: [
      { name: 'Real-time Analytics', summary: 'Built a Spring Boot and Kafka tool to parse 1M+ logs and stream results to consumers.' },
      { name: 'Kafka Consumer', summary: 'Consumed Kafka streams and persisted results to MongoDB through a Spring-based consumer.' },
      { name: 'Log Intelligence', summary: 'Implemented trends, outlier detection, and search that reduced average search time by 350%.' }
    ],
    color: '#2ec4b6',
    orbitRadius: 8.8,
    orbitSpeed: 0.13,
    accent: '#7fffd4'
  },
  {
    id: 'adobe',
    name: 'Adobe',
    title: 'Software Engineering Intern, Developer Platforms',
    period: 'Summer 2026',
    location: 'San Jose, CA',
    summary: 'Built security and reliability tooling for Kubernetes operations at enterprise scale.',
    technologies: ['React', 'D3', 'Kubernetes', 'Docker', 'Python', 'AWS', 'Postgres', 'Claude Code', 'Codex'],
    projects: [
      { name: 'Security Dashboards', summary: 'Surfaced cluster health and reliability data across more than 100,000 security tickets.' },
      { name: 'JIRA RAG Assistant', summary: 'Developed a RAG-based chatbot for natural-language querying of JIRA tickets.' },
      { name: 'Outage Reporting', summary: 'Reported Kubernetes clusters below 99.999% availability across 42+ tenant teams.' }
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
