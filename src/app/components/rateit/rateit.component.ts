import { Component, OnInit } from '@angular/core';
// SweetAlert2
import Swal from 'sweetalert2';

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
    Swal.fire({
      icon: 'success',
      title: 'Your rate has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    console.log(this.star);
  }

}
