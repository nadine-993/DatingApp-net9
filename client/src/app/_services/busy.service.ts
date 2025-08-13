import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestCounts = 0 ;
  private spinnerService= inject(NgxSpinnerService);

  busy(){
    this.busyRequestCounts++;
    this.spinnerService.show(undefined,{
      type:'line-scale-party',
      bdColor:'rgb(255,255,255,0)',
      color:'#333333'
    })
  }
  idle(){
    this.busyRequestCounts--;
    if(this.busyRequestCounts<= 0){
      this.busyRequestCounts=0;
      this.spinnerService.hide();

    }
  }
}
