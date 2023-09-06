import { Component, Input, OnInit } from '@angular/core';

interface coursalImage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  //should be an input from parent.
  images: coursalImage[] = [
    { imageSrc: "/assets/rawpixel-com-191157-600x420.jpg", imageAlt: 'slide1' },
    { imageSrc: '/assets/full-12-600x420.jpg', imageAlt: 'slide2' },
    { imageSrc: '/assets/aleks-dorohovich-26-600x420.jpg', imageAlt: 'slide3' },
    { imageSrc: '/assets/blake-parkinson-31143-600x420.jpg', imageAlt: 'slide4' },
    { imageSrc: '/assets/tran-mau-tri-tam-66419-600x420.jpg', imageAlt: 'slide5' }
  ];
  selectedIndex: number = 0;
  @Input() indicators: boolean = true;
  @Input() controls: boolean = false;
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 3000;
  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  //changes slide in every 3 seconds
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }
  selectImage(index: number) {
    this.selectedIndex = index;
  }
  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = (this.images.length) - 1;
    }
    this.selectedIndex--;
  }
  onNextClick(){
    if(this.selectedIndex==(this.images.length)){
      this.selectedIndex=0;
    }
    this.selectedIndex++;
  }

}
