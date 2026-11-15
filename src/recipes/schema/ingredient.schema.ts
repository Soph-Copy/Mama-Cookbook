import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({_id: false})
export class Ingredient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true})
  quantity: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient)