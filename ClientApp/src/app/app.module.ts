import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimeagoModule } from 'ngx-timeago';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './_components/nav-menu/nav-menu.component';
import { HomeComponent } from './_components/home/home.component';
import { MobilityComponent } from './_components/mobility/mobility.component';
import { MemberListComponent } from './_components/member-list/member-list.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { AccountComponent } from './_components/account/account.component';
import { CarouselPauseComponent } from './_components/carousel-pause/carousel-pause.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { appRoutes } from './routes';
import { PlanerComponent } from './_components/planer/planer.component';
import { MemberCardComponent } from './_components/member-card/member-card.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { MemberDetailResolver } from './_resolvers/member.detail.resolver';
import { MemberListResolver } from './_resolvers/member.list.resolver';
import { MemberEditComponent } from './_components/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member.edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';
import { PhotoEditorComponent } from './_components/photo-editor/photo-editor.component';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MessagesComponent } from './_components/messages/messages.component';
import { MemberMessagesComponent } from './_components/member-messages/member-messages.component';
import { AdminPanelComponent } from './_components/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { UserManagementComponent } from './_components/user-management/user-management.component';
import { PhotoManagementComponent } from './_components/photo-management/photo-management.component';
import { AdminService } from './_services/admin.service';
import { RolesModalComponent } from './_components/roles-modal/roles-modal.component';
import { PlanerNotloggedComponent } from './_components/planer-notlogged/planer-notlogged.component';
import { LoginComponent } from './_components/login/login.component';
import { ListsResolver } from './_resolvers/lists.resolver';
import { SidememberListComponent } from './_components/sidemember-list/sidemember-list.component';
import { SidenavComponent } from './_components/sidenav/sidenav.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { TrainingListComponent } from './_components/training-list/training-list.component';
import { TrainingCardComponent } from './_components/training-card/training-card.component';
import { TrainingEditComponent } from './_components/training-edit/training-edit.component';




export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MobilityComponent,
    PlanerComponent,
    AboutUsComponent,
    AccountComponent,
    CarouselPauseComponent,
    FooterComponent,
    MemberListComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    MessagesComponent,
    MemberMessagesComponent,
    AdminPanelComponent,
    HasRoleDirective,
    UserManagementComponent,
    PhotoManagementComponent,
    RolesModalComponent,
    PlanerNotloggedComponent,
    LoginComponent,
    SidememberListComponent,
    SidenavComponent,
    SearchfilterPipe,
    TrainingListComponent,
    TrainingCardComponent,
    TrainingEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    })

  ],
  providers: [
    ErrorInterceptorProvider,
    AlertifyService,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    MessagesResolver,
    ListsResolver,
    AuthService,
    AdminService,
    PreventUnsavedChanges
  ],
  entryComponents: [
    RolesModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
