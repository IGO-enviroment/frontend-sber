export interface Application {
  id: string
  title: string
  description: string
  competencies: string[]
  work_schedule: string
  name_organization: string
  aprove_requests_count: number
  status: "pending" | "approved" | "rejected"
}
