import { Entity, Index, Column } from "typeorm";

@Entity()
export class Tool {
    
    @Index()
    @Column({ t })
    id: number;

    @Column()
    title: string;

    link: string;

    description: string;

    tags: string[];

}