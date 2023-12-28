import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `<div class="alert alert-success " [hidden]="!displayNotification">
    <p>This website uses cookies to provide a better user experience</p>
    <div class="close"><button class="btn" (click)="closeNotification($event)">X</button></div>
    </div>`,
  styles: [`.notification-div {margin: 10px 0px; padding: 10px 20px; background-color: #fad7a0; text-align: center}`, 
  `p {font-size: 16px}`,
  `.close {float: right; margin-top: -45px}`
]
})
export class NotificationComponent {

closeNotification(event: Event) {
  this.displayNotification = false;
}
  displayNotification: boolean = true
}
