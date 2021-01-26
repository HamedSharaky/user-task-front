import { Position } from "./user-details.model";

export interface UserListDto {
  usersDto: {
    userId: string;
    userName: string;
    age: number;
    salary: number;
    joinDate : Date;
    position: Position;
    address: string;
    phone: string;
  }[];
}
