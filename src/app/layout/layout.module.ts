import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LayoutComponent} from './layout.component'
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, NgbModule,],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
