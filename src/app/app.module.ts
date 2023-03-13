import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { RouterModule, Routes } from '@angular/router';
import { FamousPeopleComponent } from './famous-people/famous-people.component';

const appRoutes: Routes = [
  {path:"donut", component: DonutsComponent},
  {path:"famousPeople", component: FamousPeopleComponent},
  {path:"", redirectTo:"donut", pathMatch:"full"}
]
@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    FamousPeopleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
