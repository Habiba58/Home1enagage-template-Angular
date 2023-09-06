import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showLogo: string = 'light';
  navLinks: string[] = ['Home', 'Features', 'Pages', 'Elements', 'Portofolio', 'Blog', 'Demos', 'Shop'];
  @ViewChild('navBar') navBarElement: ElementRef = {} as ElementRef;
  constructor() {
  }
  ngOnInit(): void {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        // Then log this message to the console
        this.showLogo = 'dark';
      }
      else {
        this.showLogo = 'light';
      }
    });
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.showLogo = 'dark';
        this.navBarElement.nativeElement.classList.remove('py-md-4');
      }
      else {
        this.showLogo = 'light';
        this.navBarElement.nativeElement.classList.add('py-md-4');
      }
    })

  }

}
