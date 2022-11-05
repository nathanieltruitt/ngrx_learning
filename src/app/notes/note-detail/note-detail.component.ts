import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, switchMap, tap } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { createNote, updateNote, deleteNote } from '../state/notes.actions';
import { selectNotes } from '../state/notes.selector';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
})
export class NoteDetailComponent implements OnInit, OnDestroy {
  id!: number | string;
  title!: string;
  content!: string;
  noteSub!: Subscription;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.noteSub = this.route.params
      .pipe(
        tap((params) =>
          Number(params['id'])
            ? (this.id = Number(params['id']))
            : (this.id = params['id'])
        ),
        switchMap(() => this.store.select(selectNotes))
      )
      .subscribe((notes) => {
        console.log('hello2');
        if (notes.length > 0 && typeof this.id === 'number') {
          this.title = notes[this.id - 1].title;
          this.content = notes[this.id - 1].content;
        }
      });
  }

  onSubmit(form: NgForm) {
    // * Create a new note if "new" is inside this.id
    if (typeof this.id === 'string') {
      this.onCreateNote(form.value.title, form.value.content);
    } else {
      this.onUpdateNote(this.id, form.value.title, form.value.content);
    }

    form.reset();
  }

  onCreateNote(title: string, content: string) {
    this.store.dispatch(createNote({ title, content }));
  }

  onUpdateNote(id: number, title: string, content: string) {
    this.store.dispatch(updateNote({ id, title, content }));
  }

  onClose() {
    this.router.navigate(['/notes']);
  }

  ngOnDestroy(): void {
    this.noteSub.unsubscribe();
  }
}
