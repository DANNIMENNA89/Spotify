import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {  HttpClientModule } from '@angular/common/http';
import * as mockRaw from '../../../data/user.json'
import jasmine from 'jasmine';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy:{ post: jasmine.Spy }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule],
      providers: [AuthService]
    });

      // Ejemplo con creatSpyObj(), pero no logro ver la adaptación a la nueva versión


    service = TestBed.inject(AuthService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });
});
