import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './BlogPost'
import { Observable, ObservableLike } from 'rxjs';


const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page,tag,category): Observable<BlogPost[]>{
    let url = `https://serene-waters-19536.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`
    if(tag) url += `&tag=${tag}`;
    if(category) url += `&category=${category}`
    
    return this.http.get<BlogPost[]>(url);
  }

  getPostById(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://serene-waters-19536.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>('https://serene-waters-19536.herokuapp.com/api/categories/');
  } 

  getTags(): Observable<string[]>{
    return this.http.get<string[]>('https://serene-waters-19536.herokuapp.com/api/tags/');
  } 
  getAllPosts():Observable<BlogPost[]>{
    const perPage = Number.MAX_SAFE_INTEGER.toString();

    let params ={
      page: "1",
      perPage: perPage
    }
    return this.http.get<BlogPost[]>(`https://serene-waters-19536.herokuapp.com/api/posts`, {params});
  }

  newPost(data:BlogPost):Observable<any>{
      return this.http.post<any>(`https://serene-waters-19536.herokuapp.com/api/posts`,data);
  }
  updatePostBy(id:string,data:BlogPost):Observable<any>{
    return this.http.put<any>(`https://serene-waters-19536.herokuapp.com/api/posts/${id}`,data);
  }

  deletePostByid(id:string):Observable<any>{
    return this.http.delete<any>(`https://serene-waters-19536.herokuapp.com/api/posts/${id}`)
  }
}
