import { Component, VERSION , OnInit} from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  ngOnInit()
  {
    

  }

  showToast(){
Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: 'Success!', text: 'Sweet Alert Toast', icon: 'success', });
  }

  showMessage(){
    Swal.fire({
        text: 'Hello!',
        icon: 'success'
      });
  }
}
