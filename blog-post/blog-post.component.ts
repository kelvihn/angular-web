import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  public _blog_id;
  public _url = 'http://localhost:2001/blog-single';
  public _data_get;

  constructor(private route_param: ActivatedRoute, private _blog_metadata: ApiService, private _http: HttpClient, private _comment_res: ApiService) { }

  ngOnInit() {
    let id = this.route_param.snapshot.paramMap.get('blog_id');
    this._blog_id = id;
    let postData = { node_data: this._blog_id };
    //get the metadata of the id
    console.log(this._blog_id);
    this._http.post(this._url, postData)
      .subscribe((data) => {
        this._data_get = data;
        console.log(this._data_get);
      });
    /*
    this._http.get(this._url)
      .subscribe((data) => {
        console.log(data);
      })
*/
  }
  /*
    onSubmit() {
      this._comment_res.register(this.userModel)
        .subscribe(
          data => console.log('Success', data),
          error => console.error('Error', error)
        )
    }
  */
}
