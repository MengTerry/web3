export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  avatar: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
  isLead?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'paused';
  progress: number;
  startDate: string;
  endDate?: string;
  budget: {
    total: number;
    allocated: number;
    spent: number;
  };
  team: string[]; // Team member IDs
  technologies: string[];
  objectives: string[];
  milestones: Milestone[];
  updates: ProjectUpdate[];
  category: 'ai' | 'biotech' | 'agritech' | 'research';
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  completedDate?: string;
}

export interface ProjectUpdate {
  id: string;
  author: string;
  authorHandle: string;
  date: string;
  content: string;
  hashtags: string[];
  likes: number;
  comments: number;
  shares: number;
  type: 'announcement' | 'progress' | 'milestone' | 'research';
  attachments?: {
    type: 'image' | 'document' | 'link';
    url: string;
    title: string;
  }[];
}