import { TestBed, async } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { NgBpmnEditorModule } from 'ng-bpmn';
import { AppComponent } from './app.component';
import { routes } from './app.module';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgBpmnEditorModule.forRoot(),
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent, DemoComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
