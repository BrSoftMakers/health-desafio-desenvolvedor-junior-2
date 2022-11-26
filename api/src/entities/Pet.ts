import {Entity, PrimaryColumn, Column, CreateDateColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';



@Entity('pets')
export class Pet{

    @PrimaryColumn({type: "text"})
    id: string

    @Column({type: "text"})
    name: string
    @Column({type: "numeric"})
    age: number
    @Column({type: "text"})
    tipo: string
    @Column({type: "text"})
    raca: string
    @Column({type: "text"}) 
    imagem: string
    @Column({type: "text"})
    owner: string
    @Column({type: "text"})
    phone: string
    @CreateDateColumn({default: "now()", type: "timestamp"})
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}