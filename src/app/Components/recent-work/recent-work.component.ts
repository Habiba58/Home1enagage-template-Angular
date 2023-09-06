import { Component } from '@angular/core';
import { workcard } from 'src/app/Views/workcard';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss']
})
export class RecentWorkComponent {
  iconClicked: boolean = false;
  indexOfClickedImage: number = 0;
  imageSrc: string = '';
  workcards: workcard[] = [
    { imageSrc: '/assets/Ceramic-Bottles-PSD-Mockups-full-600x600.jpg', title: 'Forest Road', disc: 'Other, Planing.', numberOfLikes: '24' },
    { imageSrc: 'assets/A4-Paper-PSD-MockUp-4-600x600 (1).jpg', title: 'The View', disc: 'Mockups', numberOfLikes: '23' },
    { imageSrc: '/assets/square-14-600x600.jpg', title: 'The Trip', disc: 'Mockups', numberOfLikes: '28' }
  ];
  clicked(index: number) {
    if (this.iconClicked === false) {
      this.iconClicked = true;
      this.indexOfClickedImage = index;
      this.imageSrc = this.workcards[index].imageSrc;
    }
  }
  closeEventHandler(event: boolean) {
    this.iconClicked = event;
  }
  prevEventHandler() {
    if (this.indexOfClickedImage == 0) {
      this.indexOfClickedImage = (this.workcards.length) - 1;
      this.imageSrc = this.workcards[this.indexOfClickedImage].imageSrc;
    }
    else {
      this.indexOfClickedImage -= 1;
      this.imageSrc = this.workcards[this.indexOfClickedImage].imageSrc;
    }
  }
  nextEventHandler() {
    if (this.indexOfClickedImage == ((this.workcards.length) - 1)) {
      this.indexOfClickedImage = 0;
      this.imageSrc = this.workcards[this.indexOfClickedImage].imageSrc;
    }
    else {
      this.indexOfClickedImage += 1;
      this.imageSrc = this.workcards[this.indexOfClickedImage].imageSrc;
    }

  }

}
