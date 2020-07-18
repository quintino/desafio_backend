import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tools' })
export class Tools {
    
    @PrimaryGeneratedColumn('increment', { type: 'int' })
    @IsInt()
    @ApiProperty({ description: 'Idenfificador único da ferramenta',  })
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column()
    tags: string;

}