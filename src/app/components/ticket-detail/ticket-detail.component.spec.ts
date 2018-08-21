import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketDetailComponent} from './ticket-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import {AppModule} from '../../app.module';

TestBed.configureTestingModule({
  imports: [RouterTestingModule],
  declarations: [AppModule],
});

describe('TicketDetailComponent', () => {
  let component: TicketDetailComponent;
  let fixture: ComponentFixture<TicketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
