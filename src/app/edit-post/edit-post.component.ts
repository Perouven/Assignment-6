import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  blogPost: BlogPost;
  tags: String;

  constructor(  private data : PostService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.data.getPostById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.blogPost = data;
        this.tags = this.blogPost.tags.toString();
      });
  }
  
  formSubmit(f: NgForm): void{    
    this.blogPost.tags = this.tags.split(",").map(tag=>tag.trim());
    this.data.updatePostBy(this.blogPost._id, this.blogPost).subscribe(
      data => { this.router.navigate(['admin']) }
    );
  }

  deletePost(){
    this.data.deletePostByid(this.blogPost._id).subscribe(
      data => { this.router.navigate(['/admin']) }
    );
  }


}