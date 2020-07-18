import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ToolsDTO {
    @IsString()
    readonly title: string;
  
    @IsString()
    readonly link: string;
  
    @IsString()
    readonly description: string;
  
    @ApiProperty({ description: 'Tags da ferramenta' })
    readonly tags: string[];
  }