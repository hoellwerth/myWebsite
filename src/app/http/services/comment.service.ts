import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../../models/posts.models';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private readonly http: HttpClient) {}

  getComment(commentId: string): Observable<any> {
    return this.http.get(`${environment.domain}comment/${commentId}`);
  }

  deleteComment(commentId: string): Observable<any> {
    return this.http.delete(`${environment.domain}comment/${commentId}`);
  }

  editComment(comment: Post): Observable<any> {
    return this.http.patch(
      `${environment.domain}comment/${comment._id}`,
      comment,
    );
  }

  newComment(comment: any): Observable<any> {
    return this.http.post(`${environment.domain}comment/`, comment);
  }
}
