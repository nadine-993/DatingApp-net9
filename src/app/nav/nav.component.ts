import { Component, inject,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { NgIf,  } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TitleCasePipe } from '@angular/common';




@Component({
    selector: 'app-nav',
    imports: [FormsModule, RouterLink, RouterLinkActive,BsDropdownModule , TitleCasePipe],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})
export class NavComponent {
   accountService = inject(AccountService);
   private router= inject (Router);
   private toastr= inject (ToastrService)
    model: any= {};

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {this.router.navigateByUrl('/members')
      },
      
      error: error => this.toastr.error(error.error)
    })
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/home')
  }

}
