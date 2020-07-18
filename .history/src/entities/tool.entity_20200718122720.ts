import { Entity, Index } from "typeorm";

@Entity()
export class Tool {
    
    @Index()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    title: string;

    link: string;

    description: string;

    tags: string[];

}