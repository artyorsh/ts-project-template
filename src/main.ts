import { Welcomer } from './welcomer/welcomer';

main();

export interface IWelcomer {
  createWelcome(to: string): string;
}

function main(): void {
  const startTime: number = Date.now();

  const welcomer: IWelcomer = new Welcomer();

  // @ts-expect-error - This is a runtime check
  const welcomeTo: string = process.env.MY_VAR ?? 'World';
  const message: string = welcomer.createWelcome(welcomeTo);

  console.log(message);

  const executionTime: number = Date.now() - startTime;
  console.info('Done after', executionTime / 1000, 's');
}
