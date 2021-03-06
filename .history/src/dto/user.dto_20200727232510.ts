import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {

    @ApiProperty({ description: 'Tags da ferramenta' })
    @IsString()
    readonly username: string;
  
    @ApiProperty({ description: 'Link da ferramenta' })
    @IsString()
    readonly link: string;
  
    @ApiProperty({ description: 'Descrição da ferramenta' })
    @IsString()
    readonly description: string;
  
    @ApiProperty({ description: 'Tags da ferramenta' })
    readonly tags: string[];
    
  }