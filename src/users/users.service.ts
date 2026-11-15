import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { Model } from 'mongoose'; 
import { User, UserDocument } from './schema/user.schema.js';

@Injectable()
export class UsersService {
  constructor(
  @InjectModel(User.name)  
  private userModel: Model<UserDocument>){}

  async create(userData: Partial<User>) {
    const newUser = new this.userModel(userData)
    return newUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {new:true});
  }

  async remove(id: string) {
    return this.userModel.deleteOne({_id: id}).exec();
  }
}
