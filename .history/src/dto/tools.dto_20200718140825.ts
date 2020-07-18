import { IsString } from "class-validator";

export class ToolsDTO {
    @IsString()
    readonly title: string;
  
    @IsString()
    readonly age: number;
  
    @IsString()
    readonly breed: string;
  }