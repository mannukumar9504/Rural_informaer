import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class loginService {

 private approvalStageMessage = new BehaviorSubject(false);
 currentApprovalStageMessage = this.approvalStageMessage.asObservable();

 constructor() {

 }
 updateApprovalMessage(message: any) {
 this.approvalStageMessage.next(message)
 }
}