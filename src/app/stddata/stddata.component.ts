import { Component, OnInit } from '@angular/core';
import { students, StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-stddata',
  templateUrl: './stddata.component.html',
  styleUrls: ['./stddata.component.scss']
})
export class StddataComponent implements OnInit {
  

  std: students[];

  constructor(private studentservice: StudentserviceService) { }

  ngOnInit() {
      this.studentservice.getstudents().
      then(std => this.std = std);
  }

}
