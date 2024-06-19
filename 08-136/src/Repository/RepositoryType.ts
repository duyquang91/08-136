import { ExpenseData, RoomData } from "../Models/DataModels";

export type RentRatio = {
    'roomType': string, 
    'ratio': number
}

export type RentResponse = {
    'rentTotal': number,
    'ratios': RentRatio[]
}

export interface RepositoryType {
    fetchRentResponse(month: number, year: number): Promise<RentResponse>
    fetchRoomDatas(month: number, year: number): Promise<RoomData[]>
    submitRoom(data: RoomData): Promise<RoomData[]>
    fetchExpenses(month: number, year: number): Promise<ExpenseData[]>
    submitExpensese(data: ExpenseData, isDelete: boolean): Promise<ExpenseData[]>
}