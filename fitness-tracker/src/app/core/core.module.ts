import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AboutComponent, ContactUsComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, AboutComponent]
})
export class CoreModule {}
