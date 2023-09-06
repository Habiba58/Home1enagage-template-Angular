import { Component, ElementRef, OnChanges, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss']
})
export class ShadowComponent implements OnInit, OnChanges {
  prevClicked:boolean=false;
  nextClicked:boolean=false;
  @ViewChild("lightBox") lightBoxElement: ElementRef = {} as ElementRef;
  @Input() onClick: boolean = false;
  @Input() imageClicked: string = '';
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>;
  @Output() prevEvent: EventEmitter<boolean> = new EventEmitter<boolean>;
  @Output() nextEvent: EventEmitter<boolean> = new EventEmitter<boolean>;

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.onClick) {
      this.lightBoxElement.nativeElement.classList.replace('d-none', 'd-block')
    }
    document.getElementById("lighBoxImage")?.setAttribute("src", this.imageClicked);
  }
  prevSlide() {
    this.prevClicked=true;
    this.prevEvent.emit(this.prevClicked);
  }
  nextSlide() {
  this.nextClicked=true;
  this.nextEvent.emit(this.nextClicked);
  }
  closeTab() {
    this.lightBoxElement.nativeElement.classList.add('d-none');
    this.onClick = false;
    this.closeEvent.emit(this.onClick)
  }

}

