import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    children: [
      {
        path: 'detail/:id',
        component: NoteDetailComponent,
      },
      {
        path: 'detail/new',
        component: NoteDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
export const NoteRoutingComponents = [NotesComponent, NoteDetailComponent];
