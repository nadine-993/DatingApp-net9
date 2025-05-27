import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavComponent, ToastrModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  private accountService= inject(AccountService);
  private toastr= inject(ToastrService)

  ngOnInit(): void {
    this.setCurrentUser();
    this.toastr.info('Toastr is working!');

  
  }
  setCurrentUser(){
    const userString= localStorage.getItem('user');
      if(!userString) return;
      const user=JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

 
}
