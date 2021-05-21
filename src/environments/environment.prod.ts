import { IEnvironment } from '@environment';

const apiUrl = '';

export const environment: IEnvironment = {
  production: true,
  enableDebugTools: false,
  logLevel: 'info',
  apiUrl,
};
