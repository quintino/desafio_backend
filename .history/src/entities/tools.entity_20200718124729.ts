import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Tools {
    
    @PrimaryColumn({ type: 'int' })
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