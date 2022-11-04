import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
})
export class NoteCardComponent implements OnInit {
  @Input() heading!: string;
  @Input() content!: string;
  constructor() {}

  ngOnInit(): void {}
}
