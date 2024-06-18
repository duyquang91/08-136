import { ExpenseType, ExpenseData } from "../Models/DataModels"

export enum ExpenseActionType {
    Add,
    Edit,
    Fetch
}

export type ExpenseAction = {
    'type': ExpenseType,
    'data': ExpenseData
} 