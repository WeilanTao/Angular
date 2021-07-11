import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // let id = this.router.snapshot.paramMap.get('id');
    // console.log(id);
     
  }

  sumbit(){
    this.router.navigate(['/followers'],{
      queryParams:{page:1, order:'newest'}
    })
  }

}
