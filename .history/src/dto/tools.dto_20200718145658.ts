import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ToolsDTO {

    @ApiProperty({ description: 'Tags da ferramenta' })
    @IsString()
    readonly title: string;
  
    @IsString()
    readonly link: string;
  
    @ApiProperty({ description: 'Descrição da ferramenta' })
    @IsString()
    readonly description: string;
  
    @ApiProperty({ description: 'Tags da ferramenta' })
    readonly tags: string[];
  }