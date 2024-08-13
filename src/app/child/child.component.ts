import { Component, input } from '@angular/core';

type TitleObject = {
  title: string;
};

function toTitleObject(title: string) {
  return {
    title,
  };
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<p>child works!</p>`,
})
export class ChildComponent {
  title = input.required<TitleObject, string>({
    transform: toTitleObject,
  });
}
