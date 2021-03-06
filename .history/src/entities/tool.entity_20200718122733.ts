import { Entity, Index, Column } from "typeorm";

@Entity()
export class Tool {
    
    @Index()
    @Column({ })
    id: number;

    @Column()
    title: string;

    link: string;

    description: string;

    tags: string[];

}