import { CreateUserRequest } from './../../models/create-user-request.model';
import { Component, OnInit } from '@angular/core';
import { Position } from '@app/users/models/user-details.model';
import { UsersService } from '@app/users/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  request: CreateUserRequest;

  positions: {id: number, text: string}[] = [];

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.positions = [{id: 1, text: 'Manager'}, {id: 2, text: 'SW_Developper'}];
    this.fillRequest();
  }

  fillRequest() {
    this.request = {
      address: '',
      age: 1,
      joinDate: new Date(),
      name: '',
      phone: '',
      position: Position.SW_Developper,
      salary: 1
    } as CreateUserRequest;
  }

  sendCreateRequest() {
    this.userService.create(this.request).subscribe(res => {
      if(res && res.succeeded) {
        this.router.navigateByUrl('/users');
      }
    })
  }

}

