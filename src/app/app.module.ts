import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavLinkComponent } from './shared/navbar/nav-link/nav-link.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { NotesRoutingModule } from './notes/notes-routing.module';
import { StoreModule } from '@ngrx/store';
import { NotesModule } from './notes/notes.module';
import { notesReducer } from './notes/state/notes.reducer';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    NavLinkComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    NotesModule,
    AppRoutingModule,
    StoreModule.forRoot({ notes: notesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
