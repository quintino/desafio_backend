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

    @Column()
    description: string;

    @Column()
    tags: string[];

}