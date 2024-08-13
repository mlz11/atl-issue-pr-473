import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, CommonModule, RouterOutlet],
  template: `<app-child [title]="title" />`,
})
export class AppComponent {
  title = 'atl-issue-pr-473';
}
