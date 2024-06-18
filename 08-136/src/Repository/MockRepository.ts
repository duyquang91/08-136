import { RentRatio, RepositoryType } from "./RepositoryType";

export class MockRepository implements RepositoryType {
    fetchRentRatios(): Promise<RentRatio[]> {
        return new Promise<RentRatio[]>((executor, reject) => {
            executor([
                {
                    'roomType': 'Master',
                    'ratio': 1
                },
                {
                    'roomType': 'Library',
                    'ratio': 1
                },
                {
                    'roomType': 'Common left',
                    'ratio': 1
                },
                {
                    'roomType': 'Common right',
                    'ratio': 1
                }
            ])
        })
    } 
}