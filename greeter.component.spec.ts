import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreeterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain unit test works', () => {
    fixture.componentInstance.message = 'unit test works';
    fixture.componentInstance.ngOnChanges();
    fixture.detectChanges();
    const _elementRef = fixture.debugElement;
    const outputElement = _elementRef.query(By.css('p')).nativeElement.innerText;
    expect(outputElement).toBe('unit test works');
  });
});
