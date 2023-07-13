import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent {
  selectedMenu = 'explore';

  constructor(private route: Router) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeUrl = event.url.split('/')[1];
        if (routeUrl) {
          this.selectedMenu = routeUrl;
        }
      }
    });
  }

  select(route: string): void {
    this.route.navigate([route]);
  }
}
