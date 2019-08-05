import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroInformationComponent } from './hero-information.component';
import { HeroInformationService } from './hero-information.service';
import { HeroInformationResolveService } from './hero-information-resolver.service'
import { of } from 'rxjs';

describe('HeroInformationComponent', () => {
  let fixture: ComponentFixture<HeroInformationComponent>;
  let component: HeroInformationComponent;
  let service: HeroInformationService;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HeroInformationComponent
      ],
      providers: [HeroInformationService]
    }).compileComponents();
    fixture = TestBed.createComponent(HeroInformationComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    service = debugElement.injector.get(HeroInformationService);
  }));

  afterEach(() => {
    service = null;
  });

  it('It should inject the hero-information service',
    inject([HeroInformationService], (injectedService: HeroInformationService) => {
      expect(injectedService).toBe(service);
    })
  );

});
