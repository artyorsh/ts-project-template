import { Welcomer } from './welcomer/welcomer';

main();

export interface IWelcomer {
  createWelcome(to: string): string;
}

function main(): void {
  const startTime: number = Date.now();

  const welcomer: IWelcomer = new Welcomer();
  const message: string = welcomer.createWelcome(process.env.MY_VAR || 'World');

  console.log(message);

  const executionTime: number = Date.now() - startTime;
  console.info('Done after', executionTime / 1000, 's');
}