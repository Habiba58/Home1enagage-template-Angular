import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  constructor() {

  }

  showlist(event:MouseEvent,listItem:any) {
    listItem.classList.toggle('showmenu');
    //  console.log (listItem);
  }
  sidemenu(sideBar:any){
    sideBar.classList.toggle('close');
  }
}
