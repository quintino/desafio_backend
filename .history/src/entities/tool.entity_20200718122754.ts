import { Entity, Index, Column } from "typeorm";

@Entity()
export class Tool {
    
    @Index()
    @Column({ type: 'int' })
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    description: string;

    tags: string[];

}