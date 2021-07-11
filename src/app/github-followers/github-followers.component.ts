import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { GithubFollowersService } from '../services/github-followers.service';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

   followerList: any;

  constructor(
    private route: ActivatedRoute,
    private service:GithubFollowersService) { }


  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined=>{
        let id=combined[0].get('id');
        let page=combined[1].get('page');
        
        
        // this.service.getAll({id:id, page:page})
        this.service.getAll()
          .subscribe(followers=>this.followerList=followers)
        
    })
    };

    //combined 是 subscirbe observab 得到的结果；subscirbe 函数是对于combined 这个结果进一步的操作（页面展示逻辑等）
    //这里用map 避免了在subscribe里面subsc。 map把一个总的observer(paramMap)换成我们要的数据的observer； 然后在subscirbe这个observer 
  }


