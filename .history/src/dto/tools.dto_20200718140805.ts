import { IsString } from "class-validator";

export class CreateCatDto {
    @IsString()
    readonly name: string;
  
    @IsString()
    readonly age: number;
  
    @IsString()
    readonly breed: string;
  }