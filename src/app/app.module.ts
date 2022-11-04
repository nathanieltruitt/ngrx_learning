import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavLinkComponent } from './shared/navbar/nav-link/nav-link.component';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    NavLinkComponent,
    NoteCardComponent,
    RoutingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
