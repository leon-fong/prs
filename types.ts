export interface ReleaseInfo {
  id: number
  repo: string
  title: string
  created_at: string
  number: number
  state: 'Merged' | 'Closed'
  repository_url: string
  pr_url: string
}
