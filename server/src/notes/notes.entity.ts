import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";
import { IsInt, Min, Max, IsUUID, IsString } from "class-validator";

@Entity("notes")
export class Note {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @Column()
  @IsInt()
  @Min(0)
  @Max(3)
  status: number;

  @Column()
  @IsInt()
  @Min(0)
  @Max(5)
  priority: number;

  @Column()
  aa: number
}
