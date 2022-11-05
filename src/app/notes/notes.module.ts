import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  NoteRoutingComponents,
  NotesRoutingModule,
} from './notes-routing.module';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  declarations: [NoteCardComponent, NoteRoutingComponents],
  imports: [CommonModule, NotesRoutingModule, FormsModule],
})
export class NotesModule {}
