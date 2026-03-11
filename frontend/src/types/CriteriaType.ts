
export type categoryTypes = "intelligence" | "logistics" | "alert"
export type urgencyTypes = "low" | "medium" | "high"
export interface CriteriaType {
    catgory: categoryTypes | null,
    urgency: urgencyTypes | null,
    agentCode: string | null,
}