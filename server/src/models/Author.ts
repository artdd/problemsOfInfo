import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import User from './User';
import AuthorArticle from './AuthorArticle';
import { Length, IsNotEmpty } from 'class-validator';

@Entity()
export default class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 300)
  placeOfWork: string;

  @Column()
  @Length(4, 100)
  Position: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  udc: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty()
  postCode: string;

  @Column()
  @Length(4, 300)
  @IsNotEmpty()
  scientificAchievement: string;

  @OneToMany(() => AuthorArticle, (authorArticle) => authorArticle.author, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  authorArticle: AuthorArticle[];

  @OneToOne(() => User, (user) => user.author, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  user: User[];
}
