import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
    value = "0";
    name = "Deepti";
    evenStyle = {"color": "red"}
    employees = [
      {"Name" : "Ravi Kumar Dash", "Age" : 27, "Salary" : 25000, "Address" : "Cuttack"   },
      {"Name" : "Pallavi Mishra", "Age" : 37, "Salary" : 35000, "Address" : "Bhubaneswar"   },
      {"Name" : "Sidharth Mohanty", "Age" : 24, "Salary" : 15000, "Address" : "Balesore"   },
      {"Name" : "Jason Tinku", "Age" : 21, "Salary" : 5000, "Address" : "Puri"   }
  ]
  myMethod(): void{
    if(this.name == "Deepti's Page"){
      this.name = "Deepti";
    }
    else{
      this.name = "Deepti's Page";
    }
    this.value = "1";
    //this.employees.push({"Name" : "Jasmin Patel", "Age" : 21, "Salary" : 5000, "Address" : "Puri"});
    this.employees = [
      // {"Name" : "Ravi Kumar Dash", "Age" : 27, "Salary" : 25000, "Address" : "Cuttack"   },
      // {"Name" : "Pallavi Mishra", "Age" : 37, "Salary" : 35000, "Address" : "Bhubaneswar"   },
      // {"Name" : "Sidharth Mohanty", "Age" : 24, "Salary" : 15000, "Address" : "Balesore"   },
      // {"Name" : "Jason Tinku", "Age" : 21, "Salary" : 5000, "Address" : "Puri"   },
      // {"Name" : "Jasmin Patel", "Age" : 21, "Salary" : 5000, "Address" : "Puri"}
  ]
  }
  // refreshList(employee: any): string{
    
  //   return employee.age;
  // }
}
