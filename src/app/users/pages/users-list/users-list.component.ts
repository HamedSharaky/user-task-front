import { map } from 'rxjs/operators';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@app/users/services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserListDto } from '@app/users/models/users-list-model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'name', 'age','salary','joinDate','position','address','phone', 'operations'];
  dataSource: any[];

  constructor(private userService: UsersService, private router: Router, private chDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUsersData();
  }

  loadUsersData() {
    this.userService.getAll().subscribe((res) => {
      //debugger
      if (res && res.usersDto && res.usersDto.length > 0) {
        this.dataSource = res.usersDto;
      }
    });
  }

  createNewUser() {
    debugger;
    this.router.navigateByUrl('/users/create');
  }

  updateUser(id: number) {
    this.router.navigateByUrl(`/users/update/${id}`);
  }

  detailsUser(id: number) {
    this.router.navigateByUrl(`/users/details/${id}`);
  }

  deleteUser(user: any) {
    this.userService.delete(user.userId).subscribe((res) => {
      if (res && res.succeeded) {
    //this.router.navigateByUrl('/users');
//         var removeIndex = this.dataSource.map((item) => item.userId).indexOf(user.userId);
//         ~removeIndex && this.dataSource.splice(removeIndex, 1);
// debugger;
        this.dataSource.splice(
          this.dataSource.indexOf(user) , 1);
            this.dataSource =  [...this.dataSource];
      }
    });
    // this.router.navigateByUrl('/users');
  }
}
