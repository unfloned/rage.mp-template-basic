import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Player {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    admin: number;
    
    @Column()
    money: number;
}
