import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found/not-found.component';

import { CoreModule } from './core/core.module';
import { WorkoutsComponent } from './workouts/workouts.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // NotFoundComponent,
    WorkoutsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
