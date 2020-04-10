import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    money: number;

    mp: PlayerMp;
}
