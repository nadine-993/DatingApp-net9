import { Component, inject, input, output, } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-register',
    imports: [FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject (AccountService);
  usersFromHomeComponent=input.required<any>();
   cancelRegister =output<boolean>();
  model: any={}
  register(){
this.accountService.register(this.model).subscribe({
  next: response => {
    console.log(response);
    console.log(this.usersFromHomeComponent)
    this.cancel();
  },
  error: error=> console.log(error)
})  }
  cancel(){
    this.cancelRegister.emit(false);
  }
  

}
