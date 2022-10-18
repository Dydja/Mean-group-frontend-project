import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentListComponent } from './continent-list/continent-list.component';
import { ContinentsComponent } from './home/continents/continents.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'continents/list', component: ContinentListComponent },
  { path: 'home', component: ContinentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
