import { createReducer, on } from '@ngrx/store';
import * as NotesActions from './notes.actions';
import { NotesState } from './notes.state';

export const initialState: NotesState = {
  notes: [],
};

export const notesReducer = createReducer(
  initialState,
  on(NotesActions.createNote, (state, { title, content }) => {
    let id;
    if (state.notes.length > 0) {
      id = state.notes[state.notes.length - 1].id + 1;
    } else {
      id = 1;
    }
    return { notes: [...state.notes, { id, title, content }] };
  }),
  on(NotesActions.deleteNote, (state, { id }) => {
    state.notes.splice(id - 1, 1);
    return { notes: state.notes };
  }),
  on(NotesActions.updateNote, (state, { id, title, content }) => {
    state.notes[id - 1] = { id, title, content };
    return { notes: state.notes };
  })
);
