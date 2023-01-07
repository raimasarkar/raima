import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="amitava";
  address="kolkata"
  f1()
  {
    alert('hi how are U?????')

  }
  uname=new FormControl("");
  update()
  {
    this.uname.setValue("amitava");
  }
}
