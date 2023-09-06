import { Component } from '@angular/core';
import { latestNewsInterface } from 'src/app/Views/latestNews';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent {
  newsCards: latestNewsInterface[] = [
    { imageSrc: '/assets/ilya-pavlov-87472-600x420.jpg', header: 'Audio Post', writtenBy: 'By Philip on April 22,2017', discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel quis sint corporis...' },
    { imageSrc: 'assets/rawpixel-com-191157-600x420.jpg', header: 'Modern Post', writtenBy: 'By Philip on April 22,2017', discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel quis sint corporis...' },
    { imageSrc: '/assets/full-12-600x420.jpg', header: 'Quote Post', writtenBy: 'By Philip on April 22,2017', discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel quis sint corporis...' }
  ];

}
