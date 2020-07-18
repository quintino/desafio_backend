import { IsString } from "class-validator";

export class ToolsDTO {
    @IsString()
    readonly title: string;
  
    @IsString()
    readonly link: string;
  
    @IsString()
    readonly description: string;
  
    @ApiProperty({ description: 'Título da ferramenta' })
    readonly tags: string[];
  }