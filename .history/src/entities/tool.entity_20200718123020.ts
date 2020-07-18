import { Entity, Index, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Tool {
    
    @PrimaryColumn
    @Column({ type: 'int' })
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