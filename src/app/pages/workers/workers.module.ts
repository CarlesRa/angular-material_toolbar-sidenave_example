import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [WorkersComponent],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    ComponentsModule
  ]
})
export class WorkersModule { }
