import { Component } from '@angular/core';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
User={
  Name:'',Designation:'',Location:'',Salary:''
}
display(){
  alert(`Data of employee: ${this.User.Name} added`)
}
}
