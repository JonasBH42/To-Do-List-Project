export type ormConfig = Readonly<{
  type: string;
  host: string;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
}>;
