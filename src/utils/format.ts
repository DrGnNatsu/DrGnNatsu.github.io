export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export function estimateReadingTime(body?: string, explicit?: string): string {
  if (explicit && explicit.trim().length > 0) {
    return explicit.trim()
  }
  if (!body) {
    return '1 min read'
  }
  const plainText = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/[#>*_\-[\]()!]/g, ' ')
    .trim()
  const words = plainText ? plainText.split(/\s+/).length : 0
  const minutes = Math.max(1, Math.ceil(words / 220))
  return `${minutes} min read`
}

const CATEGORY_LABELS: Record<string, string> = {
  'ai-ml': 'AI & ML',
  'full-stack': 'Full-Stack',
  devops: 'DevOps',
  data: 'Data & Databases',
  other: 'Other',
}

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? 'Other'
}

const STATUS_LABELS: Record<string, string> = {
  concept: 'Concept',
  'in-progress': 'In Progress',
  completed: 'Shipped',
  archived: 'Archived',
}

export function statusLabel(status: string): string {
  return STATUS_LABELS[status] ?? status
}
