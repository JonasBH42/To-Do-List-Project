import { DataSource, DataSourceOptions } from "typeorm";
import { ORM_CONFIG } from "./environment.js";
import { Note } from "./notes/notes.entity.js";

export const ORM = new DataSource({
  ...(ORM_CONFIG as DataSourceOptions),
  entities: [Note],
});

export const initializeORM = async (): Promise<void> => {
  try {
    await ORM.initialize();

    console.log("DB has been initialized!");
  } catch (error) {
    console.log(error);
  }
};
