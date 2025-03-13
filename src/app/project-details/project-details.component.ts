import { Component, OnInit } from '@angular/core';
import data from '../../shared/data.json';
import { ProjectInfo } from 'src/shared/data';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  projectInfo: ProjectInfo[] = data;
  activeItem!: ProjectInfo;
  activeId: string | null;
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
      },
    },
  };

  constructor(private route: ActivatedRoute) {
    this.activeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    const filterItem = this.projectInfo.filter((item) => {
      return item.id === this.activeId;
    });
    this.activeItem = filterItem[0];
  }
}
