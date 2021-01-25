import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';


const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: UsersListComponent, data: { title: marker('Users') } },
  { path: 'create', component: CreateUserComponent, data: { title: marker('Create User') } },
  { path: 'update/:id', component: UpdateUserComponent, data: { title: marker('Uodate User') } },
  { path: 'details/:id', component: UserDetailsComponent, data: { title: marker('User Details') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UsersRoutingModule {}
