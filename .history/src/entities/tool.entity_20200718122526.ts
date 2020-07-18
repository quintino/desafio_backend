import { Entity, Index } from "typeorm";

@Entity()
export class Tool {
    
    @Index()
    id: number;

    title: string;

    link: string;

}