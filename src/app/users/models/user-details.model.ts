export interface UserDetails {
    userId: number;
    name: string;
    age: number;
    salary: number;
    joinDate: Date;
    position: Position;
    address: string;
    phone: string;
}

export enum Position {
    Manager = 1,
    SW_Developper = 2,
    HR = 3,
    SalesMan = 4
}