import adobeLogo from '../pages/assets/public/adobe-logo.png';
import curoLogo from '../pages/assets/public/curo-logo.png';
import ncrLogo from '../pages/assets/public/ncr-voyix-logo.png';
import novaeLogo from '../pages/assets/public/novae-logo.png';
import ugaLogo from '../pages/assets/public/uga-logo.png';

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
        id: 'curo',
        category: 'experience',
        name: 'Curo',
        title: 'Research',
        period: 'Featured Build',
        logo: curoLogo,
        color: '#75a47f',
        summary: 'Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.',
        details: [
          'Designed the experience around fast scanning, clear actions, and low-friction navigation.',
          'Focused on turning a product idea into a usable, coherent interface.',
          'Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.',
          'Investigated biomaterials for neural repair applications and built reliable experimental documentation and support workflows.'
        ],
        skills: ['React', 'Product Design', 'Frontend Systems']
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
        name: 'University of Georgia',
        title: 'BS Computer Science',
        period: 'Academic Path',
        logo: ugaLogo,
        color: '#d7a85f',
        summary: 'Course work: Data Structures, Algorithms, Software Development, Computer Networks, Operating Systems, Computer Architecture, Systems Programming, Discrete Mathematics, Applied Machine Learning I & II, Robotics, Artificial Intelligence, Distributed Computing',
        details: [],
        skills: ['Algorithms', 'Systems', 'Web Engineering', 'AI']
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
      ,
      {
        id: 'gh-leetcode-app',
        category: 'project',
        name: 'Leetcode-App',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#6ee7b7',
        summary: 'Collection of LeetCode solutions and practice tooling implemented in TypeScript.',
        details: [
          'Implements common algorithm and data-structure solutions.',
          'Includes small utilities to run and test solutions locally.'
        ],
        skills: ['TypeScript', 'Algorithms'],
        repoUrl: 'https://github.com/AdithyaDevi3/Leetcode-App',
        readmeUrl: 'https://github.com/AdithyaDevi3/Leetcode-App/blob/main/README.md'
      },
      {
        id: 'gh-quicktrade',
        category: 'project',
        name: 'QuickTrade',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#ffd166',
        summary: 'A trading application prototype focused on order routing and strategy simulation (Java).',
        details: [
          'Prototype trading workflows and simulation harnesses.',
          'Focused on strategy execution and performance testing.'
        ],
        skills: ['Java', 'Systems'],
        repoUrl: 'https://github.com/AdithyaDevi3/QuickTrade',
        readmeUrl: 'https://github.com/AdithyaDevi3/QuickTrade/blob/main/README.md'
      },
      {
        id: 'gh-stochastic-market',
        category: 'project',
        name: 'Stochastic-Market-Prediction',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#90cdf4',
        summary: 'Research-oriented code exploring stochastic models for market prediction (Python).',
        details: [
          'Explores model architectures and evaluation for time-series forecasting.',
          'Includes notebooks and experimentation scripts.'
        ],
        skills: ['Python', 'Data Science'],
        repoUrl: 'https://github.com/AdithyaDevi3/Stochastic-Market-Prediction',
        readmeUrl: 'https://github.com/AdithyaDevi3/Stochastic-Market-Prediction/blob/main/README.md'
      },
      {
        id: 'gh-k8-cluster-control',
        category: 'project',
        name: 'k8-cluster-control',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#a78bfa',
        summary: 'Utilities for managing and automating Kubernetes cluster tasks (JavaScript).',
        details: [
          'Scripts and helpers to streamline cluster workflows.',
          'Targeted at simplifying common operational tasks.'
        ],
        skills: ['JavaScript', 'Kubernetes'],
        repoUrl: 'https://github.com/AdithyaDevi3/k8-cluster-control',
        readmeUrl: 'https://github.com/AdithyaDevi3/k8-cluster-control/blob/main/README.md'
      },
      {
        id: 'gh-bites',
        category: 'project',
        name: 'Bites',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#fb7185',
        summary: 'Small TypeScript utilities and exercises bundled as quick bites of learning.',
        details: [
          'Mini-projects and snippets for learning and demonstration.',
          'Useful helpers and small tooling pieces.'
        ],
        skills: ['TypeScript'],
        repoUrl: 'https://github.com/AdithyaDevi3/Bites',
        readmeUrl: 'https://github.com/AdithyaDevi3/Bites/blob/main/README.md'
      },
      {
        id: 'gh-ai-voice-agent',
        category: 'project',
        name: 'ai-voice-agent',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#34d399',
        summary: 'Voice agent experiments leveraging speech + NLP tooling (Python).',
        details: [
          'Explores voice-based agent prototypes and interaction flows.',
          'Includes model integration and runtime glue code.'
        ],
        skills: ['Python', 'NLP'],
        repoUrl: 'https://github.com/AdithyaDevi3/ai-voice-agent',
        readmeUrl: 'https://github.com/AdithyaDevi3/ai-voice-agent/blob/main/README.md'
      },
      {
        id: 'gh-trading-app',
        category: 'project',
        name: 'Trading-App',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#f59e0b',
        summary: 'Frontend prototype for trading interactions and visualizations (JavaScript).',
        details: [
          'Interactive UI for viewing and simulating trades.',
          'Focuses on clarity of actions and lightweight visualizations.'
        ],
        skills: ['JavaScript', 'Frontend'],
        repoUrl: 'https://github.com/AdithyaDevi3/Trading-App',
        readmeUrl: 'https://github.com/AdithyaDevi3/Trading-App/blob/main/README.md'
      },
      {
        id: 'gh-reticketer',
        category: 'project',
        name: 'reticketer',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#60a5fa',
        summary: 'A small web product demonstrating full-stack deployment and UX polish.',
        details: [
          'Includes a deployed demo and CI/CD pipeline references.',
          'Showcases end-to-end product thinking.'
        ],
        skills: ['JavaScript', 'Full Stack'],
        repoUrl: 'https://github.com/AdithyaDevi3/reticketer',
        readmeUrl: 'https://github.com/AdithyaDevi3/reticketer/blob/main/README.md'
      },
      {
        id: 'gh-stochastic-modeling-app',
        category: 'project',
        name: 'Stochastic-Modeling-App',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#a3e635',
        summary: 'Interactive modeling experiments demonstrating stochastic processes and visualizations.',
        details: [
          'Interactive web-based experiments for stochastic modeling.',
          'Includes demo pages and example scenarios.'
        ],
        skills: ['JavaScript'],
        repoUrl: 'https://github.com/AdithyaDevi3/Stochastic-Modeling-App',
        readmeUrl: 'https://github.com/AdithyaDevi3/Stochastic-Modeling-App/blob/main/README.md'
      },
      {
        id: 'gh-landing-page',
        category: 'project',
        name: 'landing-page',
        title: 'GitHub Project',
        period: 'GitHub',
        logo: null,
        color: '#f472b6',
        summary: 'Static landing page examples and CSS explorations.',
        details: [
          'Small experiments in layout and responsive design.',
          'Useful examples for quick prototypes.'
        ],
        skills: ['CSS', 'Design'],
        repoUrl: 'https://github.com/AdithyaDevi3/landing-page',
        readmeUrl: 'https://github.com/AdithyaDevi3/landing-page/blob/main/README.md'
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