import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLogged = true;
  @ViewChild('sidenav') sidenav: any;

  constructor() { }

  ngOnInit(): void {
  }
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
