import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IsInt, IsString } from 'class-validator';
@Entity({ name: 'tools' })
export class Tools {
    
    @PrimaryGeneratedColumn({ type: 'int' })
    @IsInt()
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