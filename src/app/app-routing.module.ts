import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './components/add-new/add-new.component';
import { ExploreComponent } from './components/explore/explore.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'explore' },
  { path: 'explore', component: ExploreComponent },
  { path: 'add-new', component: AddNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
