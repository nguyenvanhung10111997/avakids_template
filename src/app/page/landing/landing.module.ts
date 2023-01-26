import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing.component';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [CommonModule, NgbModule, LandingRoutingModule],
  declarations: [LandingComponent, IntroComponent, ContactComponent,FeedbackComponent],
})
export class LandingModule {}
