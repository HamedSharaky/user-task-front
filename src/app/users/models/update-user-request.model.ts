import { Position } from "./user-details.model";

export interface UpdateUserRequest {
    id: number;
    name: string;
    age: number;
    salary: number;
    joinDate: Date;
    position: Position;
    address: string;
    phone: string;
}
