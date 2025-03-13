import { Component, OnInit } from '@angular/core';
import  data from '../../shared/data.json';
import { ProjectInfo } from 'src/shared/data';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projectInfo: ProjectInfo[] = data;
  Images: any;  
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      }
    }
  }  
  projectPage: boolean = false;

  constructor(private route: Router) { 
    const currenturl = this.route.url;
      console.log(currenturl);
      if(currenturl.includes('projects')){
        this.projectPage = true;
      } else {
        this.projectPage = false;
      }
  }

  ngOnInit(): void {
    this.Images = ['assets/images/banner-1.png', 'assets/images/banner-2.png'];
  }

}
