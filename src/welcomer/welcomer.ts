import type { IWelcomer } from '../main';

export class Welcomer implements IWelcomer {

  public createWelcome(to: string): string {
    return `Hello, ${to}!`;
  }
}
