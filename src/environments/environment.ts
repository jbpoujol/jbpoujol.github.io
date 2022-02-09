import 'zone.js/dist/zone-error'; // Included with Angular CLI.
import { IEnvironment } from '@environment';

const apiUrl = '';

export const environment: IEnvironment = {
  production: false,
  enableDebugTools: true,
  logLevel: 'debug',
  apiUrl
};
