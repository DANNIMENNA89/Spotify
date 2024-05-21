import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPageComponent, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Debe de asegurarse que el formulario sea invalido cuando el ingrese datos erroneos AAA


  it('🔴 Deberia de retornar invalido el formulario', () => {

    //Arrange
    const mockCredentials = {
      email:'0x0x0x0x0x0xx',
      password:'111111111111111111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('👌 El boton debería tener la palabra "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión')
  })
});
