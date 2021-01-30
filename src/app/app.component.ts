import {Component, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nav-example';

  isLogged = true;
  @ViewChild('sidenav') sidenav: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): any {
    if (event.target.innerWidth < 800) {
      this.sidenav.close();
    }
    else {
      this.sidenav.open();
    }
  }
}
