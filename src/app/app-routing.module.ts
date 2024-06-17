import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulationComponent } from './pages/simulation/simulation.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


export const routes: Routes = [
  {
    path: 'simulation',
    loadChildren: () => import('./pages/simulation/simulation.module').then(m => m.SimulationModule)
  },
  {
    path: 'resume',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.ResumeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
