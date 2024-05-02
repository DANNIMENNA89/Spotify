import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagne reventó -->', this.elHost);
    elNative.src='../../../assets/images/img-broken.jpg'

  }

  constructor(private elHost: ElementRef) {

  }


}
