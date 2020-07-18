import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Tool {
    
    @PrimaryColumn({ type: 'int' })
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column()
    tags: string[];

}