export interface StarterTemplate {
  name: string;
  description: string;
  repo: string;
}

export const templates: StarterTemplate[] = [
  {
    name: 'React + Express',
    description: 'Full-stack starter with React and Express',
    repo: 'https://github.com/stackblitz/fullstack-react-express',
  },
  {
    name: 'SvelteKit',
    description: 'SvelteKit starter project',
    repo: 'https://github.com/stackblitz/sveltekit-starter',
  },
];
