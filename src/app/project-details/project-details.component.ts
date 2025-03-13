import { Component, OnInit } from '@angular/core';
import  data from '../../shared/data.json';
import { ProjectInfo } from 'src/shared/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectInfo: ProjectInfo[] = data;
  activeItem!: ProjectInfo;
  activeId: string | null;

  constructor(private route: ActivatedRoute) {
    this.activeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    const filterItem = this.projectInfo.filter(item=>{
      return item.id === this.activeId;
    })
    this.activeItem = filterItem[0];
    console.log(this.activeItem);

  }

}
