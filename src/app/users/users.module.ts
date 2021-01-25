import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, UsersRoutingModule, FormsModule],
  declarations: [UsersListComponent, CreateUserComponent, UpdateUserComponent, UserDetailsComponent],
  // declarations: [AboutComponent],
})
export class UsersModule {}
