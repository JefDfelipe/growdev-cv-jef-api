import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column,
    OneToOne,
    OneToMany
 } from 'typeorm';
 import { LivroEntity } from './LivroEntity';

@Entity({ name: 'autor' })
export class AutorEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    nome: string;

    @Column({ name: 'data_nascimento' })
    dataNascimento: Date;

    @OneToMany(type => LivroEntity, livro => livro.autor)
    livros?: LivroEntity[];

    constructor(nome: string, dataNascimento: Date) {
        super();
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
}