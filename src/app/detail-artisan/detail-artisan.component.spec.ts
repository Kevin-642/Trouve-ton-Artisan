import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtisanComponent } from './detail-artisan.component';

describe('DetailArtisanComponent', () => {
  let component: DetailArtisanComponent;
  let fixture: ComponentFixture<DetailArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailArtisanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
