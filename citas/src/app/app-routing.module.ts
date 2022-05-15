import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './citas/cita/cita.component';

//sirve para llamar los diferentes componentes.
const routes: Routes = [
  {
    path : 'tipocita', component : CitaComponent
  },
  {
    path : '**',redirectTo:'',pathMatch : 'tipocita'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
