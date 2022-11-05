import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectNotes } from './state/notes.selector';

@Component({
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  notes$ = this.store.select(selectNotes);
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {}

  onNewNote() {
    this.router.navigate(['/notes/detail/new']);
  }
}
