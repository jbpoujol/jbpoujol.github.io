import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EnvironmentService } from '../services/environment.service';

@Injectable()
export class MonitorInterceptor implements HttpInterceptor {
  constructor(private envService: EnvironmentService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.envService.enableDebugTools) {
      const begin = performance.now();
      return next.handle(request).pipe(
        finalize(() => {
          this.logRequestTime(begin, request.url, request.method);
        })
      );
    } else {
      return next.handle(request);
    }
  }

  private logRequestTime(startTime: number, url: string, method: string): void {
    const requestDuration = `${performance.now() - startTime}`;
    console.info(`HTTP ${method} ${url} - ${requestDuration} milliseconds`);
  }
}
