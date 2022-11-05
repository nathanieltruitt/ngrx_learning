import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteCardComponent implements OnInit {
  @Input() id!: number;
  @Input() heading!: string;
  @Input() content!: string;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onEdit() {
    this.router.navigate([`detail/${this.id}`], { relativeTo: this.route });
  }
}
