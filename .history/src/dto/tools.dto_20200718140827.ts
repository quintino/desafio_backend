import { IsString } from "class-validator";

export class ToolsDTO {
    @IsString()
    readonly title: string;
  
    @IsString()
    readonly link: number;
  
    @IsString()
    readonly breed: string;
  }