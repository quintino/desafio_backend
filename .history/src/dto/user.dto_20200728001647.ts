import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {

    @ApiProperty({ description: 'Usuário do sistema' })
    @IsString()
    readonly id: number;

    @ApiProperty({ description: 'Usuário do sistema' })
    @IsString()
    readonly username: string;
  
    @ApiProperty({ description: 'Senha de acesso' })
    @IsString()
    readonly password: string;
  
  }