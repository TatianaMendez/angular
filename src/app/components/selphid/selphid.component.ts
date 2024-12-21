import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacephiSelphidWidgetCustomEvent, SelphidExtractionFinishEvent, UserCancelEvent } from '@facephi/sdk-web-wc';

@Component({
  selector: 'selphid-component',
  templateUrl: './selphid.component.html',
  styleUrls: ['./selphid.component.css'],
})
export class SelphidComponent {
  constructor(private route: Router, private currentRoute: ActivatedRoute) { }

  @HostListener('moduleLoaded')
  onModuleLoaded() {
    console.warn('Loaded module');
  }

  @HostListener('extractionFinished', ['$event'])
  onExtractionFinished(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionFinishEvent>) {
    console.log(event);
    this.route.navigate(['../step-2'], { relativeTo: this.currentRoute });
  }

  @HostListener('userCancelled', ['$event'])
  onUserCancelled(event: FacephiSelphidWidgetCustomEvent<UserCancelEvent>) {
    console.log('userCancelled', event);
  }
}
