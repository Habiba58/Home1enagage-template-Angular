import { Component } from '@angular/core';
import { featureItem } from 'src/app/Views/features';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  features: featureItem[] = [
    { iconClass: 'bx bx-git-branch', header: 'Powerful Options', discription: 'Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.' },
    { iconClass: 'bx bx-desktop', header: 'Responsive Design', discription: 'Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo. ' },
    { iconClass: 'bx bxs-pencil', header: 'Page Builder', discription: 'Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo. ' },
    { iconClass: 'bx bx-heart', header: 'Satisfied Clients', discription: 'Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo. ' }
  ]

}
