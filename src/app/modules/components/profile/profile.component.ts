import { Component, inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { EndpointsService } from '../../services/endpoints/endpoints.service';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../../../src/app/app.component.scss']
})
export class ProfileComponent {

  private endpoints: EndpointsService = inject(EndpointsService);
  private utils: Utils = inject(Utils);

  actualYear = "actualYear";
  actualTBA = "actualTBA";
  nextYear = "nextYear";
  nextYearTBA = "nextYearTBA";

  highlighted = "highlighted";
  
  constructor () {
  }

  async ngOnInit(): Promise<void> {
  }

}
