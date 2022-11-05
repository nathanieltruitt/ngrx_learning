import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Note } from '../models/note.model';
import { createNote, deleteNote, updateNote } from './state/notes.actions';
import { selectNotes } from './state/notes.selector';
import { NotesState } from './state/notes.state';

@Component({
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  notes$ = this.store.select(selectNotes);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
