import { Position } from "./user-details.model";

export interface CreateUserRequest {
    name: string;
    age: number;
    salary: number;
    joinDate: Date;
    position: Position;
    address: string;
    phone: string;
}