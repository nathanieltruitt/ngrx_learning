import { createAction, props } from '@ngrx/store';

export const createNote = createAction(
  '[Notes Page] Create Note',
  props<{ title: string; content: string }>()
);
export const updateNote = createAction(
  '[Notes Page] Update Note',
  props<{ id: number; title: string; content: string }>()
);
export const deleteNote = createAction(
  '[Notes Page] Delete Note',
  props<{ id: number }>()
);
