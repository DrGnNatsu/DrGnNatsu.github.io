export type SkillCategory = {
  name: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    name: 'AI / ML Engineering',
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'LLMs',
      'RAG',
      'Fine-tuning',
      'MLOps',
    ],
  },
  {
    name: 'Full-Stack Web',
    skills: [
      'TypeScript',
      'Astro',
      'React',
      'Node.js',
      'Tailwind CSS',
      'PostgreSQL',
      'REST / GraphQL',
    ],
  },
  {
    name: 'Infrastructure & Tools',
    skills: [
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'AWS',
      'GCP',
      'Linux',
      'CI/CD',
    ],
  },
]

export const experience = [
  {
    role: 'AI Engineer',
    company: 'Self-employed / Freelance',
    period: '2024 – Present',
    highlights: [
      'Built LLM integration and RAG pipelines for client products',
      'Deployed fine-tuned open-weight models with vLLM inference',
      'Consulted on MLOps and data pipeline design',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Open Source & Personal Projects',
    period: '2022 – Present',
    highlights: [
      'PGTuner — PostgreSQL configuration tuning tool',
      'AI Engineer personal site & technical blog',
      'Multiple open-source contributions',
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University',
    period: '2018 – 2022',
  },
]
