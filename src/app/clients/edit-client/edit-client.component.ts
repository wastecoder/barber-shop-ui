import { Component, Inject } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ICLientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';

@Component({
  selector: 'app-edit-client',
  imports: [],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
  ],
})
export class EditClientComponent {
  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT)
    private readonly httpService: ICLientService
  ) {}
}
