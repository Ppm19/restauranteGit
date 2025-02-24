import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraUsuarioComponent } from './cabecera-usuario.component';

describe('CabeceraUsuarioComponent', () => {
  let component: CabeceraUsuarioComponent;
  let fixture: ComponentFixture<CabeceraUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabeceraUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
