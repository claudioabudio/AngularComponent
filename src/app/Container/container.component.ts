import { Component } from "@angular/core";
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    imports: [NavComponent, HeaderComponent]
})
export class ContainerComponent {

}