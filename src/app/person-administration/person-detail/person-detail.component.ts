import { Component } from '@angular/core';
import {Person} from "../../models/person";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})

export class PersonDetailComponent {
  
  personList: Person[] = [
    new Person(18, "toto" , "gomez"),
    new Person(20,"juan","nino"),
    new Person(14, "mario" , "lopez")
  ]
  selectedPerson: Person | null = null;

  seleccionarPersona(person:Person){
    this.selectedPerson = person;
  }
}
