import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CourseDemo';
  show: boolean = false;
  offset: Number | undefined = 0;
  ngOnInit(): void {
    this.offset = document.getElementById('welcome')?.offsetTop;
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > Number(this.offset) || document.documentElement.scrollTop > Number(this.offset)) {
        this.show = true;
      }
      else
        this.show = false;
    });
    // if (document.getElementById('lightBoxContainer') != null) {
    //   document.getElementById('lightBoxContainer')!.style.top =
    //     document.getElementById('recent-work')?.offsetTop + "px";
    // }

  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

}
