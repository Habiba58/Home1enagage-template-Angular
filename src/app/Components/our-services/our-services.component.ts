import { Component } from '@angular/core';
import { ourServiceInterface } from 'src/app/Views/ourServices';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  servicesList: ourServiceInterface[] = [
    { header: 'Facilities', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.' },
    { header: 'Best Equipment', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.' },
    { header: 'Incredible Location', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.' },
    { header: 'Premium Support', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.' },
    { header: '', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.' },
    { header: '', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.' },
  ];

}
