import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({
    example: 'Davies Ebisine',
    description: 'The name of the user'
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    example: 'davies@gmail.com',
    description: "User's email"
  })
  @Prop({ unique:true, required: true })
  email: string;

  @ApiProperty({
    example:'Daviesloves20@'
  })
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
