import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: 'tools' })
export class Tools {
    
    @Pr
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