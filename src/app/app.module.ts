import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SimulationModule } from './pages/simulation/simulation.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SimulationModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
]
})
export class AppModule { }
