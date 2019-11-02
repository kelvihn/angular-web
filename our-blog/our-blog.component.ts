import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
//import { Post } from './../blog';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.scss']
})
export class OurBlogComponent implements OnInit {

  _post: any;

  constructor(private _blog_metadata: ApiService, private _router: Router) {
    this._blog_metadata.getPosts().subscribe((data) => {
      this._post = data;
    })
  }
  ngOnInit() {

  }

  onSelect(_blog_id: number) {
    this._router.navigate(['/blog-post', _blog_id]);
  }
}
