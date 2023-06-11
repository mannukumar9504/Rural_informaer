import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
constructor(public config: ConfigService) {}
value: any;
error = "";
successMessage = "";
callAPi() {
  this.config.getConfigResponse()
  .subscribe({
    next : (data: any) => {
      this.value = { ...data}
      this.successMessage = this.value.body.statusMessage;
    },
    error : error => this.error = error
  
  })
}
}
