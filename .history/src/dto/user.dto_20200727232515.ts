import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {

    @ApiProperty({ description: 'Tags da ferramenta' })
    @IsString()
    readonly username: string;
  
    @ApiProperty({ description: 'Link da ferramenta' })
    @IsString()
    readonly password: string;
  
  }