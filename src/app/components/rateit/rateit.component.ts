import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rateit',
  templateUrl: './rateit.component.html',
  styleUrls: ['./rateit.component.scss']
})
export class RateitComponent  {
  star: 0;

  formatLabel(value: number) {
    if (value >= 6) {
      return Math.round(value / 6);
    }
    return value;
  }
  updateSetting(event){
    debugger
    this.star = event.value;
    console.log(this.star);
  }

}
