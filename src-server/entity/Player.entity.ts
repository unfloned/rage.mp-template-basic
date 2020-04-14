import {Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn, ObjectID} from "typeorm";

@Entity()
export class Player {
    /*
        i use mongoDb database driver, so i must use this */
    @ObjectIdColumn()
    id: string;

    /* 
            if you are use mysql or other else driver you can use this
    @PrimaryGeneratedColumn()
    id: number;  
    */

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    admin: number;
    
    @Column()
    money: number;
}
