import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OperationService } from '../operation/operation.service';
import { MessageService } from '../message/message.service';
import { LedgerService } from '../ledger/ledger.service';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorHandlingService } from '../../services/error-handling/error-handling.service';

describe('LedgerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      providers: [LedgerService, MessageService, OperationService, ErrorHandlingService]
    });
  });

  it('should be created', inject([LedgerService], (service: LedgerService) => {
    expect(service).toBeTruthy();
  }));
});
