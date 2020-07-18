import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tools' })
export class Tools {
    
    @PrimaryGeneratedColumn({ type: '' })
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