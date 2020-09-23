import {Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn, ObjectID} from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    model: string;

    @Column()
    x: number;
    @Column()
    y: number;
    @Column()
    z: number;

    @Column()
    color1: number = 0;
    @Column()
    color2: number = 0;

    @Column()
    fuel: number;

    @Column()
    owner: string;

    // we store here the ragemp vehicle object so we can access in there...
    mp: VehicleMp;


    // Simple Function to get the Position of the Vehicle in RageMP Format Vector3
    getPosition(): Vector3Mp {
        return new mp.Vector3(this.x, this.y, this.z);
    }

    // Simple function to set the Position to our object.
    setPosition(position: Vector3Mp) {
        this.x = position.x;
        this.y = position.y;
        this.z = position.z;
    }
}