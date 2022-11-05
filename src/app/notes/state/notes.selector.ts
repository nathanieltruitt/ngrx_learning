import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { NotesState } from './notes.state';

const selectNotesState = (state: AppState) => state.notes;
export const selectNotes = createSelector(
  selectNotesState,
  (state: NotesState) => state.notes
);
