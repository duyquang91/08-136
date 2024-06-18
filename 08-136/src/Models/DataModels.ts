
export enum ExpenseType {
    Utility = 'Utility',
    Wifi = 'Wifi',
    Cleanup = 'Cleanup',
    Rent = 'Rent',
    Other = 'Other'
}

export enum ExpenseSplitType {
    ByRoomEqualy = 'By room equaly',
    ByHeadcount = 'By headcounts',
    ByRentRatio = 'By rent ratio'
}

export type ExpenseData = {
    'name': ExpenseType,
    'desc'?: string,
    'totalAmount': number,
    'splits': ExpenseSplitType,
    'month': number,
    'year': number,
    'submittedBy': string
}

export enum RoomType {
    Libary = 'Library',
    CommonLeft = 'Common left',
    CommonRight = 'Common right',
    Master = 'Master'
}

export type Tenant = {
    'name'?: string,
    'isChild': boolean,
    'livingDays': number
}

export type RoomData = {
    'type': RoomType,
    'rentRatio': number,
    'month': number,
    'year': number,
    'tenants': Tenant[]
}