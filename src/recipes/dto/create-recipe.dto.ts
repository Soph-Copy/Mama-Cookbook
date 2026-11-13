import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, Length, ValidateNested } from "class-validator";
import {Transform, Type} from 'class-transformer'
import { IngredientDto } from "./ingredients.dto.js";

export class CreateRecipeDto {
  @IsString()
  @Transform(({value }) => value.trim())
  title: string;

  @IsString()
  @Length(2, 200, { message: 'Description must be between 2 to 200 characters' })
  description: string;
  
  @IsString()
  category: string;

  @IsString()
  prepTime: string;
  
  @IsString()
  cookTime: string;
  
  @IsNumber()
  servings: number;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredients: IngredientDto[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  instructions: string[];
}
