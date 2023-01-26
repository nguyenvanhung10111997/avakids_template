import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news.component';
import {CompoundComponent} from './compound/compound.component'
import { LandingRoutingModule } from './news-routing.module';

@NgModule({
  imports: [CommonModule, NgbModule, LandingRoutingModule],
  declarations: [NewsComponent, CompoundComponent],
})
export class NewsModule {}
