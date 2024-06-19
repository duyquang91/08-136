import { ExpenseData, RoomData } from "../Models/DataModels";
import { RentResponse, RepositoryType } from "./RepositoryType";

export class MockRepository implements RepositoryType {
    fetchRentResponse(): Promise<RentResponse> {
        return new Promise<RentResponse>((executor, _) => {
            executor(
                {
                    'rentTotal': 3000,
                    'ratios': [
                        {
                            'roomType': 'Master',
                            'ratio': 0.35
                        },
                        {
                            'roomType': 'Library',
                            'ratio': 55 / 300
                        },
                        {
                            'roomType': 'Common left',
                            'ratio': 7 / 30
                        },
                        {
                            'roomType': 'Common right',
                            'ratio': 7 / 30
                        }
                    ]
                }
            )
        }
        )
    }

    fetchRoomDatas(): Promise<RoomData[]> {
        return new Promise<RoomData[]>((executor, _) => {
            executor(
                []
            )
        })
    }

    submitRoom(data: RoomData): Promise<RoomData[]> {
        return new Promise<RoomData[]>((executor, _) => {
            executor([])
        })
    }

    fetchExpenses(): Promise<ExpenseData[]> {
        return new Promise<ExpenseData[]>((executor, _) => {
            executor([])
        })
    }

    submitExpensese(data: ExpenseData): Promise<ExpenseData[]> {
        return new Promise<ExpenseData[]>((executor, _) => {
            executor([])
        })
    }

}