import { ExpenseType, ExpenseData } from "../Models/DataModels"

export enum ExpenseActionType {
    AddOrEdit,
    Delete
}

export type ExpenseAction = {
    'type': ExpenseType,
    'data': ExpenseData
} 