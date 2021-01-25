import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUserRequest } from '@app/users/models/update-user-request.model';
import { Position } from '@app/users/models/user-details.model';
import { UsersService } from '@app/users/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  request: UpdateUserRequest;

  positions: {id: number, text: string}[] = [];

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.positions = [{id: 1, text: 'Manager'}, {id: 2, text: 'SW_Developper'}];
    this.fillRequest( +(this.route.snapshot.paramMap.get('id')));     //(get url /id) => + == parseInt == Number("id")
  }

  fillRequest(id: number) {
    this.userService.getById(id).subscribe((res) => {
      if (res) {
        //this.request = res as UserDetails
        this.request = {
          ...res,
          id: res.userId
        } as UpdateUserRequest;
      }
    });
  }

  sendUpdateRequest() {
    this.userService.update(this.request).subscribe((res) => {
      if (res && res.succeeded) {
        this.router.navigateByUrl('/users');
      }
    });
  }
}

