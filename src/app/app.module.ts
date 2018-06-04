import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { RouterModule, Routes, NavigationEnd } from '@angular/router';
import { addskillComponent } from './addskill/addskill.component';
import { SkillComponent } from './skill/skill.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { MyKindergartenComponent } from './my-kindergarten/my-kindergarten.component';
import { NgmoduleComponent } from './ngmodule/ngmodule.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import{ AngularFireStorageModule} from 'angularfire2/storage';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { navigationCancelingError } from '@angular/router/src/shared';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MyregisterComponent } from './myregister/myregister.component';
import { DetailsComponent } from './details/details.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MyfonteComponent } from './myfonte/myfonte.component';

const routes:Routes=[
  {  path:'' , redirectTo: 'home' , pathMatch:'full'},
  {  path:'home' ,component:HomeComponent },
  {  path:'addskill' ,component:addskillComponent },
  {  path:'login' ,component:LoginComponent },
  {  path:'mylogin' ,component:MyloginComponent },
  {  path:'myskill' ,component: MyskillComponent },
  {  path:'myKindergarten' ,component:MyKindergartenComponent },
  { path:'Ngmodule' , component:NgmoduleComponent},
  { path:'mylogin' , component:MyloginComponent},
  {  path:'register', component:RegisterComponent },
  {  path:'details/:id', component:DetailsComponent },
  {  path:'myregister' , component:MyregisterComponent} ,                                             
  {  path:'detail/:id' , component:DetailsComponent} ,                                             
  {  path:'userprofile' , component:UserprofileComponent} ,    
  {  path:'myfonte' , component:MyfonteComponent} ,                 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AssetsComponent,
    addskillComponent,
    SkillComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    MyKindergartenComponent,
    NgmoduleComponent,
    NgmodelComponent,
    MyloginComponent,
    MyregisterComponent,
    DetailsComponent,
    UserprofileComponent,
    MyfonteComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
