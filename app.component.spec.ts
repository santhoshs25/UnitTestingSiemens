import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchComponent } from '../app/search/search.component';
import { DisplayComponent } from '../app/display/display.component';
import { By } from '@angular/platform-browser'

describe('AppComponent using ngMock', () => {
  let fixture: ComponentFixture<AppComponent>;
  let hostComponent: AppComponent;
  let searchComponentRef: SearchComponent;
  let displayComponentRef: DisplayComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockComponent(SearchComponent), MockComponent(DisplayComponent)
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    const searchComponentElRef = fixture.debugElement.query(By.directive(SearchComponent));
    searchComponentRef = searchComponentElRef.componentInstance;
    const displayComponentElRef = fixture.debugElement.query(By.directive(DisplayComponent));
    displayComponentRef = displayComponentElRef.componentInstance;
  });

  //smoke test
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render MockSearchComponent", function () {
    expect(searchComponentRef).toBeTruthy();
  });

  it("should render MockDsiplayComponent", function () {
    expect(displayComponentRef).toBeTruthy();
  });

  it('AppComponent Listen for MockSearch button click changes', () => {

    fixture.detectChanges();
    searchComponentRef.searchKeyChanged.emit('Testing');
    displayComponentRef.ngOnChanges();
    fixture.detectChanges();
    expect(fixture.componentInstance.searchKey).toBe("Testing");
  });

});
