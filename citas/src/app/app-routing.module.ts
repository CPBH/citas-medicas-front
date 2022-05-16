import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitarComponent } from './citar/citar/citar.component';
import { CitaComponent } from './citas/cita/cita.component';

//sirve para llamar los diferentes componentes.
const routes: Routes = [
  {
    path : 'cita', component : CitarComponent
  },
  {
    path : 'tipocita', component : CitaComponent
  },
  {
    path : '**',redirectTo:'',pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
