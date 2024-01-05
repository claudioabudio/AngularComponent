import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    searchValue : string = "iPhone"

    changeSearchValue(eventData: Event) {
      // console.log((<HTMLInputElement>eventData.target).value);
      this.searchValue = (<HTMLInputElement>eventData.target).value;
    }
}
