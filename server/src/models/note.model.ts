import { Entity, Column } from 'typeorm';

@Entity()
export class Note {
  @Column({
    type: 'uuid',
    primary: true,
  })
  id: string;

  @Column({
    type: 'text',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  doneAt: Date | null;
}
