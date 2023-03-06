import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarEquipsComponent } from './projecte/components/entrar-equips/entrar-equips.component';
import { TaulellsComponent } from './projecte/components/taulells/taulells.component';

const routes: Routes = [
  { path: 'entrarEquips', component: EntrarEquipsComponent },
  { path: 'jugar', component: TaulellsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
