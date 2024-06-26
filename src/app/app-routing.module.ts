import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { AddMemberComponent } from './_components/add-member/add-member.component';
import { EditMemberComponent } from './_components/edit-member/edit-member.component';

const routes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'members/add', component: AddMemberComponent },
  { path: 'members/edit/:id', component: EditMemberComponent },
  { path: '', redirectTo: '/members', pathMatch: 'full' },
  { path: '**', redirectTo: '/members' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
