import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have <h1> with "Hello, this is the RatingApp!"', () => {
    const homeElement: HTMLElement = fixture.nativeElement;
    const h1 = homeElement.querySelector('h1')!;
    expect(h1.textContent).toEqual('Hello, this is the RatingApp!');
  });

});
