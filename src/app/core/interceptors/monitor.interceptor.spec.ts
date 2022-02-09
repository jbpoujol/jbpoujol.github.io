import { MonitorInterceptor } from './monitor.interceptor';
import { TestBed } from '@angular/core/testing';

describe('MonitorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [MonitorInterceptor]
    })
  );

  it('should be created', () => {
    const interceptor: MonitorInterceptor = TestBed.inject(MonitorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
