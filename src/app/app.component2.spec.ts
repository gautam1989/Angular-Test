import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent2 } from './app.component2';

describe('AppComponent2', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent2
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent2);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app2'`, () => {
    const fixture = TestBed.createComponent(AppComponent2);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent2);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-app2 app is running!');
  });
});
