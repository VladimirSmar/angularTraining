import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTableShellComponent } from './server-table-shell.component';

describe('ServerTableShellComponent', () => {
  let component: ServerTableShellComponent;
  let fixture: ComponentFixture<ServerTableShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerTableShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTableShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
