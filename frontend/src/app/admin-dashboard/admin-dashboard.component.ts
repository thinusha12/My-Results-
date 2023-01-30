import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksService } from '../service/marks.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  id: string = '';
  studentId: string = '';
  name: string = '';
  english: number = 0;
  maths: number = 0;
  history: number = 0;
  science: number = 0;
  ict: number = 0;
  overallMarks: number = 0;
  isPass: boolean = false;
  grade: string = '';
  allMarks: any[] = [];
  isCreate: boolean = true;
  searchGrade: string = '';
  searchStatus: string = '';

  constructor(private router: Router, private marksService: MarksService) {}
  ngOnInit(): void {
    this.getAllMarks();
  }

  public getAllMarks = (): void => {
    this.marksService
      .getAllMarks(this.searchGrade, this.searchStatus)
      .subscribe(
        (res: any) => {
          this.allMarks = <any>res.data;
          console.log(this.allMarks);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  public createMark = (): void => {
    if (this.studentId === '') {
      alert('Enter a Valid Student Id');
      return;
    } else if (this.name === '') {
      alert('Enter a Valid Name');
      return;
    }
    this.overallMarks =
      this.english + this.maths + this.history + this.science + this.ict;

    if (this.overallMarks / 5 >= 45) {
      this.isPass = true;
    } else {
      this.isPass = false;
    }

    const ob = {
      studentId: this.studentId,
      name: this.name,
      english: this.english,
      maths: this.maths,
      history: this.history,
      science: this.science,
      ict: this.ict,
      overallMarks: this.overallMarks,
      isPass: this.isPass,
      grade: this.grade,
    };

    console.log(ob);
    this.marksService.createMark(ob).subscribe(
      (res: any) => {
        console.log(res);
        alert(res.message);
        this.getAllMarks();
        this.resetData();
      },
      (err: any) => {
        console.log(err);
        alert(err.message);
      }
    );
  };

  public deleteMark = (id: string): void => {
    this.marksService.deleteMark(id).subscribe(
      (res: any) => {
        alert(res.message);
        this.getAllMarks();
      },
      (err: any) => {
        console.log(err);
        alert(err.message);
      }
    );
  };

  public updateMarksOnFields = (i: number): void => {
    this.isCreate = false;
    const ob = this.allMarks[i];
    this.studentId = ob.studentId;
    this.name = ob.name;
    this.english = ob.english;
    this.maths = ob.maths;
    this.history = ob.history;
    this.science = ob.science;
    this.ict = ob.ict;
    this.id = ob._id;
    this.grade = ob.grade;
  };

  public resetData = () => {
    this.studentId = '';
    this.name = '';
    this.english = 0;
    this.maths = 0;
    this.history = 0;
    this.science = 0;
    this.ict = 0;
    this.id = '';
    this.grade = '';
  };

  public updateMark = () => {
    if (this.studentId === '') {
      alert('Enter a Valid Student Id');
      return;
    } else if (this.name === '') {
      alert('Enter a Valid Name');
      return;
    }
    this.overallMarks =
      this.english + this.maths + this.history + this.science + this.ict;

    if (this.overallMarks / 5 >= 45) {
      this.isPass = true;
    } else {
      this.isPass = false;
    }

    const ob: object = {
      studentId: this.studentId,
      name: this.name,
      english: this.english,
      maths: this.maths,
      history: this.history,
      science: this.science,
      ict: this.ict,
      overallMarks: this.overallMarks,
      isPass: this.isPass,
      grade: this.grade,
    };
    this.marksService.updateMark(this.id, ob).subscribe(
      (res: any) => {
        alert(res.message);
        this.isCreate = true;
        this.getAllMarks();
        this.resetData();
      },
      (err: any) => {
        console.log(err);
        alert(err.message);
      }
    );
  };

  navigateChat = () => {
    this.router.navigate(['chat'], { queryParams: { admin: true } });
  };
}
