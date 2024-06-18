import { ExpenseData, RoomData } from "../Models/DataModels";

export type RentRatio = {
    'roomType': string, 
    'ratio': number
}

export interface RepositoryType {
    fetchRentRatios(): Promise<RentRatio[]>
}