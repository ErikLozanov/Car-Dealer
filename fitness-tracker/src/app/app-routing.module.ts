import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './core/about/about.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {path: 'about', component: AboutComponent},
  {path: 'workouts', component: WorkoutsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
