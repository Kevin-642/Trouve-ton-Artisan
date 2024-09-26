import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { artisan, ArtisansDataServiceService } from '../../artisans-data-service.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  servicesArtisans: artisan[] = [];

  constructor(private ArtisansDataService: ArtisansDataServiceService,
    private router: Router ) { }

  ngOnInit(): void {
    this.servicesArtisans = this.ArtisansDataService.getArtisansByCategory('Services');
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}
