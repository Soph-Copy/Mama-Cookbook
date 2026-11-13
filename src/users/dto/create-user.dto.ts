import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator";
import {Transform} from "class-transformer"


export class CreateUserDto {
  @IsString()
  @Length(2, 50, { message: 'Name must be between 2 to 50 characters' })
  @Transform(({ value }) => value.trim())
  name: string;

  @IsEmail()
  @Length(5, 50, { message: 'Input must be an email' })
  email: string;

  @IsStrongPassword({
    minLength: 10,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 2,
    minSymbols: 1,
  })
  password: string;

}
