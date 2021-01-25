import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position, UserDetails } from '@app/users/models/user-details.model';
import { UsersService } from '@app/users/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  request: UserDetails;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fillRequest( +(this.route.snapshot.paramMap.get('id')));     //(get url /id) => + == parseInt == Number("id")
  }

  fillRequest(id: number) {
    this.userService.getById(id).subscribe((res) => {
      if (res) {
        //this.request = res as UserDetails
        this.request = {
          userId: res.userId,
          address: res.address,
          age: res.age,
          joinDate: res.joinDate,
          name: res.name,
          phone: res.phone,
          position: Position[res.position.toString()],
          salary: res.salary,
        } as UserDetails;
      }
    });
  }

  backUsersList() {
    this.router.navigateByUrl('/users');
  }
}

