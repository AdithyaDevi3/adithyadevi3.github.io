import adobeLogo from '../pages/assets/public/adobe-logo.png';
import curoLogo from '../pages/assets/public/curo-logo.png';
import ncrLogo from '../pages/assets/public/ncr-voyix-logo.png';
import novaeLogo from '../pages/assets/public/novae-logo.png';

export const landingCampaignBranches = [
  {
    id: 'experience',
    label: 'Experience',
    side: 'left',
    color: '#cf765f',
    nodes: [
      {
        id: 'adobe',
        category: 'experience',
        name: 'Adobe',
        title: 'Developer Platforms Intern',
        period: 'Summer 2026',
        logo: adobeLogo,
        color: '#d36a5f',
        summary: 'Developer tooling and platform experience work across product and engineering workflows.',
        details: [
          'Exploring platform workflows that make developer onboarding and day-to-day shipping clearer.',
          'Working across APIs, product thinking, and internal tooling for developer experience.'
        ],
        skills: ['Developer Platforms', 'APIs', 'Systems Design']
      },
      {
        id: 'ncr',
        category: 'experience',
        name: 'NCR Voyix',
        title: 'Mobile Development Intern',
        period: 'Summer 2025',
        logo: ncrLogo,
        color: '#668fbd',
        summary: 'Built mobile systems for retail operations and connected commerce experiences.',
        details: [
          'Shipped polished mobile workflows for in-store operational teams.',
          'Connected app flows to commerce data with resilient integration patterns.'
        ],
        skills: ['React Native', 'Expo', 'GraphQL', 'TypeScript']
      },
      {
        id: 'novae',
        category: 'experience',
        name: 'Novae',
        title: 'Software Engineering Intern',
        period: 'Summer 2024',
        logo: novaeLogo,
        color: '#75a47f',
        summary: 'Contributed to event-driven systems and modern web interfaces for product operations.',
        details: [
          'Improved message-driven services and monitoring around streaming workflows.',
          'Built cleaner admin surfaces for internal operational use.'
        ],
        skills: ['Spring Boot', 'Angular', 'Kafka', 'MongoDB']
      },
      {
        id: 'research-experience',
        category: 'experience',
        name: 'Research',
        title: 'Undergraduate Research',
        period: 'Aug 2024 - May 2025',
        logo: null,
        color: '#5f9ea0',
        summary: 'Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.',
        details: [
          'Investigated biomaterials for neural repair applications.',
          'Built reliable experimental documentation and support workflows.'
        ],
        skills: ['Research', 'Materials', 'Neuroscience']
      }
    ]
  },
  {
    id: 'education',
    label: 'Education',
    side: 'right',
    color: '#d7a85f',
    nodes: [
      {
        id: 'education-core',
        category: 'education',
        name: 'Education',
        title: 'Computer Science Foundation',
        period: 'Academic Path',
        logo: null,
        color: '#d7a85f',
        summary: 'Coursework and independent study focused on software systems, product building, and applied AI.',
        details: [
          'Building a foundation across algorithms, systems, web engineering, and human-centered software.',
          'Pairing coursework with internships, research, and project-based learning.'
        ],
        skills: ['Algorithms', 'Systems', 'Web Engineering', 'AI']
      },
      {
        id: 'coursework-systems',
        category: 'education',
        name: 'Systems Track',
        title: 'Software Systems + Product Engineering',
        period: 'Focus Area',
        logo: null,
        color: '#bd8548',
        summary: 'A technical lane focused on reliable software, interfaces, and system-level thinking.',
        details: [
          'Combines frontend/product work with backend patterns and system design fundamentals.',
          'Feeds directly into internship and project work where usability and engineering quality both matter.'
        ],
        skills: ['System Design', 'Frontend', 'Backend', 'Product']
      }
    ]
  },
  {
    id: 'projects',
    label: 'Projects',
    side: 'right',
    color: '#75a47f',
    nodes: [
      {
        id: 'curo',
        category: 'project',
        name: 'Curo',
        title: 'Product Engineering Project',
        period: 'Featured Build',
        logo: curoLogo,
        color: '#75a47f',
        summary: 'A product-focused build centered on useful workflows, careful interaction design, and polished execution.',
        details: [
          'Designed the experience around fast scanning, clear actions, and low-friction navigation.',
          'Focused on turning a product idea into a usable, coherent interface.'
        ],
        skills: ['React', 'Product Design', 'Frontend Systems']
      },
      {
        id: 'research',
        category: 'project',
        name: 'Research',
        title: 'Undergraduate Research',
        period: 'Aug 2024 - May 2025',
        logo: null,
        color: '#5f9ea0',
        summary: 'Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.',
        details: [
          'Investigated biomaterials for neural repair applications.',
          'Built reliable experimental documentation and support workflows.'
        ],
        skills: ['Research', 'Materials', 'Neuroscience']
      },
      {
        id: 'portfolio-galaxy',
        category: 'project',
        name: 'Portfolio Galaxy',
        title: 'Interactive 3D Portfolio',
        period: 'Current Build',
        logo: null,
        color: '#668fbd',
        summary: 'A game-like portfolio interface built around a living crystal, rocket navigation, and explorable detail cards.',
        details: [
          'Uses Three.js and React to turn portfolio navigation into a spatial experience.',
          'Focuses on memorable interaction while keeping content discoverable through clear tree nodes.'
        ],
        skills: ['Three.js', 'React', 'Interaction Design']
      }
    ]
  }
];

export const landingCampaignNodes = landingCampaignBranches.flatMap((branch) =>
  branch.nodes.map((node, index) => ({
    ...node,
    branchId: branch.id,
    branchLabel: branch.label,
    branchSide: branch.side,
    pathIndex: index
  }))
);