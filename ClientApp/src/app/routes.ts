import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { MobilityComponent } from './_components/mobility/mobility.component';
import { MemberListComponent } from './_components/member-list/member-list.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { AccountComponent } from './_components/account/account.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member.detail.resolver';
import { MemberListResolver } from './_resolvers/member.list.resolver';
import { MemberEditComponent } from './_components/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member.edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';
import { PlanerComponent } from './_components/planer/planer.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { AdminPanelComponent } from './_components/admin-panel/admin-panel.component';
import { AuthGuard } from './_guards/auth.guard';
import { PlanerNotloggedComponent } from './_components/planer-notlogged/planer-notlogged.component';
import { LoginComponent } from './_components/login/login.component';
import { ListsResolver } from './_resolvers/lists.resolver';
import { SidememberListComponent } from './_components/sidemember-list/sidemember-list.component';
import { TrainingListComponent } from './_components/training-list/training-list.component';
import { TrainingEditComponent } from './_components/training-edit/training-edit.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'planer', component: PlanerComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: 'member/list', component: MemberListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: 'member/list/:id', component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      {
        path: 'sidemember/list', component: SidememberListComponent,
        resolve: { users: ListsResolver }
      },
      {
        path: 'member/edit', component: MemberEditComponent,
        resolve: { user: MemberEditResolver }, canDeactivate: [PreventUnsavedChanges]
      },
      { path: 'messages', component: MessagesComponent, resolve: { messages: MessagesResolver } },

      { path: 'admin', component: AdminPanelComponent, data: { roles: ['Admin', 'Moderator'] } },
      { path: 'training/list', component: TrainingListComponent, data: { roles: ['Coach'] } },

      { path: 'training/edit', component: TrainingEditComponent, data: { roles: ['Coach'] } },

    ]
  },
  { path: 'mobility', component: MobilityComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'planer/notlogged', component: PlanerNotloggedComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },



];
