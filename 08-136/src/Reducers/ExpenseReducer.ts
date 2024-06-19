import { ExpenseType, ExpenseData } from "../Models/DataModels"
import { currentRepository } from "../Repository/RepositoryManager"

export enum ExpenseActionType {
    Submit,
    Update,
    Delete
}

export type ExpenseAction = {
    'type': ExpenseActionType,
    'data': ExpenseData
} 

export function expenseReducer(state: ExpenseData, action: ExpenseAction): ExpenseData[] {
    switch (action.type) {
        case ExpenseActionType.Submit: {
            return []
        }

        case ExpenseActionType.Update: {
            return []
        }
        case ExpenseActionType.Delete: {
            return []
        }
    }
}