import { TeamMember, Project } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Edore Akpokodje',
    role: 'Principal Investigator (PI)',
    specialization: 'Lecturer in Computer Science, Aberystwyth University',
    avatar: '/logos/team/edore.jpg',
    bio: 'Applies mobile and sensor technologies to advance smart agriculture, environmental monitoring, and ICT-enabled food security.',
    skills: [
      'Mobile & Sensor Technologies',
      'Smart Agriculture',
      'Environmental Monitoring',
      'ICT for Food Security'
    ],
    isLead: true
  },
  {
    id: '2',
    name: 'Dr. Praboda Rajapaksha',
    role: 'Co-Investigator',
    specialization: 'Lecturer in Health Data Science, Aberystwyth University & Data Scientist, Hywel Dda Health Board',
    avatar: '/logos/team/praboda.jpg',
    bio: 'Bridges academia and healthcare with expertise in machine learning, generative AI, natural language processing, and applied data science.',
    skills: [
      'Machine Learning',
      'Generative AI',
      'Natural Language Processing',
      'Data Science'
    ]
  },
  {
    id: '3',
    name: 'Dr. Aiswarya Girija',
    role: 'Co-Investigator, IBERS',
    specialization: 'Strategic Research Fellow, IBERS',
    avatar: '/logos/team/Aiswarya.jpg',
    bio: 'Leads research on plant stress response and biochemistry to enhance crop resilience.',
    skills: [
      'Plant Stress Response',
      'Plant Biochemistry',
      'Crop Resilience'
    ]
  },
  {
    id: '4',
    name: 'Luned Roberts',
    role: 'Research Fellow',
    specialization: 'IBERS',
    avatar: '/logos/team/Luned.jpg',
    bio: 'Focuses on plant pathology and climate-resilient crop research to safeguard agricultural productivity.',
    skills: [
      'Plant Pathology',
      'Climate-Resilient Crops',
      'Agricultural Research'
    ]
  },
  {
    id: '5',
    name: 'Terry Tang',
    role: 'Researcher & PhD Candidate',
    specialization: 'Department of Computer Science, Aberystwyth University',
    avatar: '/logos/team/terry.jpg',
    bio: 'PhD researcher advancing multimodal large language models (MLLMs) and computer vision for agricultural innovation.',
    skills: [
      'Multimodal LLMs',
      'Computer Vision',
      'AI Research'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'deepdetect-2025',
    title: 'DeepDetect',
    subtitle: 'AI-Powered Potato Disease Detection',
    description: 'Developing an advanced image-based mobile diagnosis application for early disease detection in potato farming using Vision-Language Models.',
    status: 'active',
    progress: 65,
    startDate: '2025-06-01',
    endDate: '2025-11-30',
    budget: {
      total: 47786.34,
      allocated: 47786.34,
      spent: 31000.00
    },
    team: ['1', '2', '3', '4', '5'],
    technologies: ['PyTorch', 'React Native', 'Computer Vision', 'VLMs', 'AWS'],
    objectives: [
      'Develop accurate disease detection model (>95% accuracy)',
      'Create user-friendly mobile application',
      'Conduct field trials with 3 partner farms',
      'Validate commercial viability'
    ],
    milestones: [
      {
        id: 'm1',
        title: 'Data Collection Phase',
        description: 'Complete field visits and image dataset compilation',
        dueDate: '2025-07-15',
        completed: true,
        completedDate: '2025-07-12'
      },
      {
        id: 'm2',
        title: 'Model Development',
        description: 'Train and validate core AI model',
        dueDate: '2025-09-01',
        completed: true,
        completedDate: '2025-08-28'
      },
      {
        id: 'm3',
        title: 'Model Validation Phase',
        description: 'Validate model performance against real-world datasets',
        dueDate: '2025-11-25',
        completed: false
      },
      {
        id: 'm4',
        title: 'Field Trials',
        description: 'Conduct comprehensive field testing',
        dueDate: '2025-11-30',
        completed: false
      }
    ],
    updates: [
      {
        id: 'u1',
        author: 'Aber Agri-Health',
        authorHandle: '@AberAgriHealth',
        date: '2025-01-15',
        content: 'MAJOR BREAKTHROUGH! Our Vision-Language Model achieved 97.3% accuracy in potato disease detection across 15 different disease types. The model can now provide contextual recommendations based on environmental factors. #AI #Agriculture #Innovation',
        hashtags: ['#AI', '#Agriculture', '#Innovation'],
        likes: 156,
        comments: 23,
        shares: 45,
        type: 'milestone'
      },
      {
        id: 'u2',
        author: 'Dr. Sarah Chen',
        authorHandle: '@DrSarahChen',
        date: '2025-01-12',
        content: 'Exciting progress on our Agent-AI system! We\'ve successfully integrated real-time weather data, soil conditions, and historical farm data to provide farmers with actionable insights beyond just disease identification. The future of precision agriculture is here! 🚀',
        hashtags: ['#PrecisionAg', '#AgentAI', '#TechForGood'],
        likes: 89,
        comments: 12,
        shares: 28,
        type: 'progress'
      },
      {
        id: 'u3',
        author: 'Aber Agri-Health',
        authorHandle: '@AberAgriHealth',
        date: '2025-01-08',
        content: 'FIELD TRIAL RESULTS: After testing with 50+ farmers across Wales, our app has helped reduce crop losses by an average of 23% and decreased pesticide usage by 31%. Real-world impact that matters! 📊 #SustainableAgriculture #ImpactTech',
        hashtags: ['#SustainableAgriculture', '#ImpactTech'],
        likes: 234,
        comments: 34,
        shares: 67,
        type: 'research'
      }
    ],
    category: 'agritech',
    priority: 'high'
  },
];

export const allUpdates = projects.flatMap(project => 
  project.updates.map(update => ({
    ...update,
    projectId: project.id,
    projectTitle: project.title
  }))
).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
