import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegData } from './reg-data';
import { BlogComment } from './blog';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  _url = 'http://localhost:2000/user';
  _url2 = 'http://localhost:80/site/member_register.php';
  blog_url = 'http://localhost:2000/blog';
  spec_blog_url = 'http://localhost:2000/blog_single';
  comments = 'http://localhost:2002/blog_comments';

  register(data: RegData) {
    return this._http.post<any>(this._url, data);
  }

  submitComment(data: BlogComment) {
    return this._http.post<any>(this.comments, data);
  }

  getPosts() {
    return this._http.get(this.blog_url);
  }

}
