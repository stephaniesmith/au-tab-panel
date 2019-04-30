import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let tabPanel: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AuTabPanelComponent,
        AuTabComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
  })

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should only find one tab', () => {
    const tabs = tabPanel.queryAll(By.css('.tab'));

    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  })

  it('the Contacts tab should be selected', async(() => {
    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toContain('Login');
  }));

  it('should display the Contacts tab', async(() => {
    const contactEmail = tabPanel.query(By.css('.login-email'));

    expect(contactEmail).toBeTruthy();
  }));

  it('should switch to the Login Tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    tabButtons[2].nativeElement.click();

    fixture.detectChanges()

    const contactEmail = tabPanel.query(By.css('.contact-email'));
    expect(contactEmail).toBeTruthy();

    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toContain('Contact');
  }));
});
