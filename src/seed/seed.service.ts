import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from 'src/seed/data/brands.seed';
import { CARS_SEED } from 'src/seed/data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';


@Injectable()
export class SeedService {

  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService
  ){}

  populateDB(){
    this.CarsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandsService.fillBrandsWithSeedData(BRANDS_SEED)
    return 'Seed Executed successfully';
  }

}
