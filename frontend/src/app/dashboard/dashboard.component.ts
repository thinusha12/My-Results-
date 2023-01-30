import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksService } from '../service/marks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  studentId: string = '';
  name: string = '';
  studentData: any = {};
  isOpen: boolean = false;

  constructor(private router: Router, private marksService: MarksService) {}

  ngOnInit(): void {}

  getMarkByNameAndId = (): void => {
    this.marksService.getMarkByNameAndId(this.studentId, this.name).subscribe(
      (res: any) => {
        if (res.data.length === 0) {
          alert('No Student Found');
        } else {
          this.studentData = <any>res.data[0];
          console.log(this.studentData);
          this.isOpen = true;
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  onClosePopup = (eventData: { isOpen: boolean }): void => {
    this.isOpen = eventData.isOpen;
  };

  navigateChat = () => {
    this.router.navigate(['chat'], { queryParams: { admin: false } });
  };
}
