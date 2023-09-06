import { Component, OnInit } from '@angular/core';
import { acttivitiesInterface } from 'src/app/Views/activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities: acttivitiesInterface[] = [
    { iconClass: 'bx bx-like', numberOfLikes: 'count1', title: 'Page Likes' },
    { iconClass: 'bx bxs-store', numberOfLikes: 'count2', title: ' Locations' },
    { iconClass: 'bx bx-bulb', numberOfLikes: 'count3', title: 'Great Ideas' },
    { iconClass: 'bx bx-message-rounded-dots', numberOfLikes: 'count4', title: ' Comments' }
  ];
  ngOnInit(): void {
    var offset = document.getElementById('welcome')?.offsetTop;
    console.log("in Component",offset);
    let count2Inter = setInterval(count2Interval);
    let count3Inter = setInterval(count3Interval);
    let count4Inter = setInterval(count4Interval);
    let count1Inter = setInterval(count1Interval);
    let upto1: number = 0;
    let upto2 = 0;
    let upto3 = 0;
    let upto4 = 0;
    function count1Interval() {
      let count1 = document.getElementById("count1");
      if (count1 != undefined) {
        count1.innerHTML = String(++upto1);
      }
      if (upto1 === 1430) {
        clearInterval(count1Inter);
      }
    }
    function count2Interval() {
      let count2 = document.getElementById("count2");
      if (count2 != undefined) {
        count2.innerHTML = String(++upto2);
      }
      if (upto2 === 64) {
        clearInterval(count2Inter);
      }
    }
    function count3Interval() {
      let count3 = document.getElementById("count3");
      if (count3 != undefined) {
        count3.innerHTML = String(++upto3);
      }
      if (upto3 === 960) {
        clearInterval(count3Inter);
      }
    }

    function count4Interval() {
      let count4 = document.getElementById("count4");
      if (count4 != undefined) {
        count4.innerHTML = String(++upto4);
      }      
      if (upto4 === 420) {
        clearInterval(count4Inter);
      }
    }


  }

}
