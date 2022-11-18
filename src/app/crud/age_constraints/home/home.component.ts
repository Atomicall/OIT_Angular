import { Component, OnInit } from '@angular/core';
import { AgeConstraint } from '../age-constraint';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ageConstraints : AgeConstraint [] = [];
  constructor(public crudService: CrudService) {
   }

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data : AgeConstraint[])=>{
      const tmp = data.map((item: any)=>{
      return {id: item.id,
        constraint_title: item.constraintTitle,
        age: item.allowedAge
      };
    });
      console.log(tmp);
      this.ageConstraints = tmp;
    })
  }
  updateTable () : void{

  }


}
