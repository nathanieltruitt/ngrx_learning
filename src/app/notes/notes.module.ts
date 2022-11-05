import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import {
  NoteRoutingComponents,
  NotesRoutingModule,
} from './notes-routing.module';
import { NoteCardComponent } from './note-card/note-card.component';
import { notesReducer } from './state/notes.reducer';

@NgModule({
  declarations: [NoteCardComponent, NoteRoutingComponents],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
