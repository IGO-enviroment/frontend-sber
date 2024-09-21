import { Practice } from "./types.ts"

export const practice: Practice = {
  id: "id",
  title: "Frontend-разработчик (в офис г. Екатеринбург)",
  description: "Опыт 1-3 года",
  competencies: ["react", "angular", "dkdkf"],
  work_schedule: "",
  name_organization: "ИТ-ЛИНК",
  aprove_requests_count: 10,
  requests_count: 0,
  limit: 100,
  views: 100,
  rating: 10,
  status: "pending",
}

export const statuses = {
  pending: { label: "Ожидает решения", color: "info" as const },
  approved: { label: "Заявка одобрена", color: "success" as const },
  rejected: { label: "Заявка отклонена", color: "error" as const },
}

export const practices = Array.from({ length: 20 }).fill(practice) as Practice[]
