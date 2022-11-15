import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { NoRegistrosComponent } from './components/no-registros/no-registros.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [LoadingComponent, NoRegistrosComponent],
  imports: [CommonModule, MaterialModule, NgxSpinnerModule],
  exports: [LoadingComponent, NoRegistrosComponent],
})
export class SharedModule {}
