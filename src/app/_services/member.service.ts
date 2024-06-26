import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Member } from '../_interfaces/member';
import { Observable } from 'rxjs';
import { CreateMember } from '../_interfaces/create-member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  createMember(createMember: CreateMember): Observable<Member> {
    return this.http.post<Member>(this.baseUrl + '/member', createMember);
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + '/member');
  }


  getMemberById(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/member/${id}`);
  }

  updateMember(id: number, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/member/${id}`, member);
  }
}
