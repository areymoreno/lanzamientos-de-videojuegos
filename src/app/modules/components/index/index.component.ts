import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { EndpointsService } from '../../services/endpoints/endpoints.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../../../../src/app/app.component.scss']
})
export class IndexComponent {

  private utils: Utils = inject(Utils);
  private endpoints: EndpointsService = inject(EndpointsService);

  constructor () { }

}
