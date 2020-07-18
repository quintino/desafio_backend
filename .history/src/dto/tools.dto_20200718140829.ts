import { IsString } from "class-validator";

export class ToolsDTO {
    @IsString()
    readonly title: string;
  
    @IsString()
    readonly link: string;
  
    @IsString()
    readonly breed: string;
  }