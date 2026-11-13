import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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

    @Prop({
        type: [
            {
                name: String,
                quantity: String,
            },
        ],
        required: true,
    })
    ingredients: {
        name: string;
        quantity: string
    }[];

  

    @Prop({type: Date, default: Date.now, immutable:true})
    createdAt: Date

}
