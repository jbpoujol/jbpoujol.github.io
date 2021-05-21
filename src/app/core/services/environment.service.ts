import { Injectable } from '@angular/core';
import { environment, IEnvironment, LogLevel } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements IEnvironment {
  get production(): boolean {
    return environment.production;
  }

  get enableDebugTools(): boolean {
    return environment.enableDebugTools;
  }

  get logLevel(): LogLevel {
    return environment.logLevel;
  }

  get apiUrl(): string {
    return environment.apiUrl;
  }
}
