import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {

  @HostListener('emitExtraData', ['$event'])
  emitExtraData(event: CustomEvent) {
    console.log('extraData', event.detail);
  }

  @HostListener('emitOperationId', ['$event'])
  emitOperationId(event: CustomEvent) {
    console.log('operationId', event.detail);
  }

  @HostListener('emitSessionId', ['$event'])
  emitSessionId(event: CustomEvent) {
    console.log('sessionId', event.detail)
  }

  @HostListener('emitData', ['$event'])
  emitData(event: CustomEvent) {
    console.log('data', event.detail);
  }
}
