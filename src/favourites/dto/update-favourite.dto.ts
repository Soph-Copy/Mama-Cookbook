import { PartialType } from '@nestjs/mapped-types';
import { CreateFavouriteDto } from './create-favourite.dto.js';

export class UpdateFavouriteDto extends PartialType(CreateFavouriteDto) {}
