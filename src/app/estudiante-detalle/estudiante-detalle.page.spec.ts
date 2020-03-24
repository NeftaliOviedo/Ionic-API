import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstudianteDetallePage } from './estudiante-detalle.page';

describe('EstudianteDetallePage', () => {
  let component: EstudianteDetallePage;
  let fixture: ComponentFixture<EstudianteDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudianteDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
