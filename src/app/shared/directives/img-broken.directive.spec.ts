import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { findSourceMap } from 'module';
import exp from 'constants';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img appImgBroken class="testing-directive" [src]="srckMock">'
})

class TestComponent {
  public srckMock: any = null
}

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() =>{
    TestBed.configureTestingModule({
      declarations:[
        TestComponent
      ],
      imports:[
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  })

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('🙄🙄 TestComoponent debería instanciarse correctamente',() =>{
    expect(component).toBeTruthy()
  })

  it('😊😊 Directiva deberia de cambiar la imagen por otra', (done: DoneFn) =>{
    //Arange
    const beforeImgelement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgelement.src //Tenemos url antes de ser cambiada por la directiva
    component.srckMock = undefined

    setTimeout(()=>{
      const afterImgelement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgelement.src //Tenemos url despues de ser cambiada por la directiva

      expect(afterImgSrc).toEqual('https://miro.medium.com/v2/resize:fit:1400/1*Klh1l7wkoG6PDPb9A5oCHQ.png')
      done()
    }, 3000)



  })

});
