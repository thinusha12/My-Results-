import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarksService {
  private serviceUrl = 'http://localhost:8070/api/marks';

  constructor(private http: HttpClient) {}

  createMark(data: object): Observable<Object> {
    return this.http.post(`${this.serviceUrl}/create`, data);
  }

  getAllMarks(grade: string, status: string): Observable<Object> {
    const params = new HttpParams().set('grade', grade).set('status', status);
    return this.http.get(`${this.serviceUrl}/get`, { params });
  }

  deleteMark(id: string): Observable<Object> {
    const params = new HttpParams().set('id', id);
    return this.http.delete(`${this.serviceUrl}/delete`, { params });
  }

  getMarkByNameAndId(id: string, name: string): Observable<Object> {
    const params = new HttpParams().set('studentId', id).set('name', name);
    return this.http.get(`${this.serviceUrl}/find`, { params });
  }

  updateMark(id: string, data: object): Observable<Object> {
    const params = new HttpParams().set('id', id);
    return this.http.put(`${this.serviceUrl}/update`, data, { params });
  }
}
