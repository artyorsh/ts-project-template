import type { IWelcomer } from '../main';
import { Welcomer } from './welcomer';

describe('Welcomer', () => {

  const welcomer: IWelcomer = new Welcomer();

  it('should welcome World', () => {
    const message: string = welcomer.createWelcome('World');

    expect(message).toEqual('Hello, World!');
  });
});
