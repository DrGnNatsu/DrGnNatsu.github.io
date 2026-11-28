export type ServiceTier = {
  id: string
  name: string
  description: string
  features: string[]
  idealFor: string
}

export const services: ServiceTier[] = [
  {
    id: 'llm-integration',
    name: 'LLM Integration & RAG',
    description:
      'Production-grade retrieval-augmented generation pipelines, agent orchestration, and LLM-powered features integrated into your existing stack.',
    features: [
      'RAG pipelines with vector stores',
      'Prompt engineering & evaluation',
      'Agent orchestration (LangChain / LlamaIndex)',
      'Guardrails, caching, and cost optimization',
    ],
    idealFor: 'Teams adding AI features to existing products',
  },
  {
    id: 'fine-tuning',
    name: 'Model Fine-Tuning & Deployment',
    description:
      'Fine-tune open-weight models for your domain and deploy them with reliable inference endpoints and monitoring.',
    features: [
      'Supervised fine-tuning (LoRA / QLoRA)',
      'Dataset curation & preprocessing',
      'Inference API deployment (vLLM / TGI)',
      'Model evaluation & benchmarking',
    ],
    idealFor: 'Companies needing domain-specific models',
  },
  {
    id: 'mlops',
    name: 'MLOps & Data Pipelines',
    description:
      'End-to-end ML infrastructure: training pipelines, experiment tracking, model serving, and observability.',
    features: [
      'CI/CD for ML models',
      'Feature stores & data validation',
      'Model monitoring & drift detection',
      'Kubernetes / cloud deployment',
    ],
    idealFor: 'ML teams scaling to production',
  },
  {
    id: 'ai-agents',
    name: 'AI Agents & Automation',
    description:
      'Custom AI agents that automate workflows, browse the web, call APIs, and execute multi-step tasks autonomously.',
    features: [
      'Tool-use agents (browser, code, API)',
      'Multi-agent orchestration',
      'Human-in-the-loop workflows',
      'Safety & rate limiting',
    ],
    idealFor: 'Operations-heavy teams',
  },
  {
    id: 'fullstack-ai',
    name: 'Full-Stack Web + AI',
    description:
      'End-to-end web applications with AI features baked in — from frontend to database to model integration.',
    features: [
      'React / Astro frontends',
      'Node / Python backends',
      'PostgreSQL & vector databases',
      'AI feature integration',
    ],
    idealFor: 'Startups building AI-native products',
  },
]

export const engagementProcess = [
  {
    step: 1,
    title: 'Discovery',
    description:
      'We define the problem, success metrics, and constraints together.',
  },
  {
    step: 2,
    title: 'Prototype',
    description:
      'A working prototype validates the approach before full build.',
  },
  {
    step: 3,
    title: 'Build & Deploy',
    description: 'Production-grade implementation with monitoring and docs.',
  },
  {
    step: 4,
    title: 'Handoff',
    description: 'Knowledge transfer and optional ongoing support retainer.',
  },
]
