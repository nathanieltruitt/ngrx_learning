import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent implements OnInit {
  @Input() label!: string;
  @Input() route!: string;

  constructor() {}

  ngOnInit(): void {}
}
