import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service.js';
import { FavouritesController } from './favourites.controller.js';

@Module({
  controllers: [FavouritesController],
  providers: [FavouritesService],
})
export class FavouritesModule {}
