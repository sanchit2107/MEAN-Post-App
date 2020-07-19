import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // posts = [
  //   {title: "First Post", content: "Here, I am inside the first post'\s content!!"},
  //   {title: "Second Post", content: "Here, I am inside the second post'\s content!!"},
  //   {title: "Third Post", content: "Here, I am inside the third post'\s content!!"}
  // ];

    posts = [];
}
