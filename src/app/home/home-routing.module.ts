import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPage } from '../pages/input/input.page';
// import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: InputPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
