import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'video-recruitment-component',
  templateUrl: './videoRecruitment.component.html',
  styleUrls: ['./videoRecruitment.component.css'],
})
export class VideoRecruitmentComponent {
  constructor(private route: Router) { }

  onFinishVideo() {
    console.log('onFinishVideo');
    this.route.navigate(['finish']);
  }

  onUserCancel() {
    console.log('User cancel');
  }
}
