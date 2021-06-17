import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { SwitchComponent } from './switch/switch.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, SwitchComponent, NgforComponent],
  exports: [StructuralDirectiveComponent],
  imports: [CommonModule],
})
export class StructuralDirectiveModule {}
