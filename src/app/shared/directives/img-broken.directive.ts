import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagne reventó -->', this.elHost);
    if (this.customImg){
      elNative.src = this.customImg
    }
    else{
      elNative.src = 'https://miro.medium.com/v2/resize:fit:1400/1*Klh1l7wkoG6PDPb9A5oCHQ.png'
    }

  }

  constructor(private elHost: ElementRef) {

  }


}
