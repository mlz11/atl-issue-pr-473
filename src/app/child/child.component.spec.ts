import { render } from '@testing-library/angular';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  it('should render', async () => {
    await render(ChildComponent, {
      inputs: {
        title: 'title',
      },
    });
  });
});
