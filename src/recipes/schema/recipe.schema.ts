import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IngredientSchema } from './ingredient.schema.js';

export type RecipeDocument = HydratedDocument<Recipe>

@Schema()
export class Recipe {
    @Prop({required: true})
    title : string

    @Prop()
    description: string
    @Prop()
    category: string
    @Prop()
    prepTime: string
    @Prop()
    cookTime: string
    @Prop()
    servings: number

    @Prop({type: [IngredientSchema],required: true})
    ingredients: {
        name: string;
        quantity: string
    }[];

  @Prop({type: [String], required: true })
  instructions: string[];
  
  @Prop({ type: Date, default: Date.now, immutable: true })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe)
