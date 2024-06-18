import { ExpenseData, TenantData } from "./DataModels";

export interface RepositoryType {
    fetchTenants(month: number, year: number): Promise<TenantData[]>
    addOrModifyTenant(data: TenantData): Promise<void>
    fetchExpenses(month: number, year: number): Promise<ExpenseData[]>
    addOrModifyExpense(data: ExpenseData): Promise<void>
}