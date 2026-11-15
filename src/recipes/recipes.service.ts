import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto.js';
import { UpdateRecipeDto } from './dto/update-recipe.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe, RecipeDocument } from './schema/recipe.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name)
    private recipeModel: Model<RecipeDocument>) {}
  
  async create(recipeData: Partial<Recipe>) {
    const newRecipe = new this.recipeModel(recipeData)
    return newRecipe.save();
  }

  async findAll() {
    return this.recipeModel.find().exec();
  }

  async findOne(id: string) {
    return this.recipeModel.findById(id).exec();
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeModel.findByIdAndUpdate(id, updateRecipeDto, {new:true});
  }

  async remove(id: string) {
    return this.recipeModel.deleteOne({_id: id}).exec();
  }
}
