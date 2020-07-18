import { Entity } from "typeorm";

@Entity()
export class Tool {
    
    @Index()
    id: string;

}