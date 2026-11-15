import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service.js';
import { RecipesController } from './recipes.controller.js';
import { Mongoose } from 'mongoose';
import { Recipe, RecipeSchema } from './schema/recipe.schema.js';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Recipe.name,
        schema: RecipeSchema
      },
    ]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
