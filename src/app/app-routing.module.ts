import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParametrizedExampleComponent } from './parametrized-example/parametrized-example.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'parametrized/:truc', component: ParametrizedExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
