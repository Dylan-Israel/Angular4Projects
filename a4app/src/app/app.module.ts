//Used for dynamic browser sync
import { BrowserModule } from '@angular/platform-browser';
//Basic angular4
import { NgModule } from '@angular/core';
//Forms libvrary
import { FormsModule } from '@angular/forms';
//Importing root component
import { AppComponent } from './app.component';
//Importing user component
import { UserComponent } from './components/user/user.component';
//Importing data service
import { DataService } from './services/data.service';
//Import http to do REST shit
import { HttpModule } from '@angular/http';
import { AboutComponent } from './components/about/about.component';
//Require files for routing
import { RouterModule, Routes } from '@angular/router';
//Create routes
const appRoutes:Routes = [
  {path:"", component: UserComponent},
  {path:"about", component: AboutComponent}
];
@NgModule({
  //Declarations are modules/components we are using
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  //Modules are required files we are using
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Add routes
    RouterModule.forRoot(appRoutes)
  ],
  //Providers are services
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
