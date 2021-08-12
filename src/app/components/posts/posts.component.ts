import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isLoading: boolean;
  posts: any;
  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.postsService.getUsersPost().subscribe(res => {
      this.posts = res['data'];
      this.isLoading = false
    })

  }

}
