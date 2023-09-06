import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent implements OnInit {
  listItemP: string[] = ['Aliquam fermentum lorem quis posuere mattis.',
    'Sed mollis sapien erat id pellentesque libero.',
    'Nam consectetur adipiscing elit ullamcorper.',
    'Pellentesque nisl id semper bibendum.'
  ];
  ngOnInit(): void {
   
  }


}
