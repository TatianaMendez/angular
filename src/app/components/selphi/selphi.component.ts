import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacephiSelphiWidgetCustomEvent, SelphiExceptionCapturedEvent, SelphiExtractionFinishEvent } from '@facephi/sdk-web-wc';

@Component({
  selector: 'selphi-component',
  templateUrl: './selphi.component.html',
  styleUrls: ['./selphi.component.css'],
})
export class SelphiComponent {
  constructor(private route: Router, private currentRoute: ActivatedRoute) { }

  @HostListener('extractionFinished', ['$event'])
  onExtractionFinished(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionFinishEvent> | Event | CustomEvent) {
    console.log(event);
    this.route.navigate(['../step-3'], { relativeTo: this.currentRoute });
  }

  @HostListener('userCancelled', ['$event'])
  emitOperationId(event: CustomEvent) {
    console.log('userCancelled', event.detail);
  }

  @HostListener('exceptionError', ['$event'])
  onExceptionError(event: FacephiSelphiWidgetCustomEvent<SelphiExceptionCapturedEvent> | Event | CustomEvent) {
    console.log('error', event);
  }
}
