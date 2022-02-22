import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @Prop({ unique: true })
  email: string;

  @ApiProperty({ example: '123456qwerty', description: 'password' })
  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  roles: Role[];

  @ApiProperty({ example: 'true', description: 'banned or not' })
  @Prop({ default: false })
  banned: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
