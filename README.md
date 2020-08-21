# SweetAlertWithAngular

First, install sweetalert2 using npm. Then import Swal from 'sweetalert2'

In app.component.html

<input type="button" value="Show Toast" class="btn btn-primary" (click)="showToast()"/>

<input type="button" value="Show Message" class="btn btn-primary" (click)="showMessage()"/>
In app.component.ts

showToast(){
Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: 'Success!', text: 'Sweet Alert Toast', icon: 'success', });
  }

  showMessage(){
    Swal.fire({ text: 'Hello!', icon: 'success'});
  }
