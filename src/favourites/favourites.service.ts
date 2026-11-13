import { Injectable } from '@nestjs/common';
import { CreateFavouriteDto } from './dto/create-favourite.dto.js';
import { UpdateFavouriteDto } from './dto/update-favourite.dto.js';

@Injectable()
export class FavouritesService {
  create(createFavouriteDto: CreateFavouriteDto) {
    return 'This action adds a new favourite';
  }

  findAll() {
    return `This action returns all favourites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favourite`;
  }

  update(id: number, updateFavouriteDto: UpdateFavouriteDto) {
    return `This action updates a #${id} favourite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favourite`;
  }
}
