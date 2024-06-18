
export enum ExpenseType {
    ElectricAndWater = 'Electric & water',
    Wifi = 'Wifi',
    Cleanup = 'Cleanup',
    Rent = 'Rent',
    Other = 'Other'
}

export enum ExpenseSplitType {
    ByRoom = 'By rooms',
    ByHeadCount = 'By headcount'
}

export type ExpenseData = {
    'name': ExpenseType,
    'amount': number,
    'splitBy': ExpenseSplitType,
    'dateInterval': number,
    'submittedBy': string
}

export enum RoomType {
    Common = 'Common',
    Master = 'Master'
}

export enum Month {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December",
}

export type TenantData = {
    'name': string,
    'roomType': RoomType,
    'expenses': ExpenseData[]
}