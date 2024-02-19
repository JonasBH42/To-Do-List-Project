import { NextFunction, Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Note } from "./notes/notes.entity.js";
import { v4 as uuidv4 } from "uuid";
import { ORM } from "./ORM.js";
import {
  save_sucsess,
  save_error,
  no_changes,
} from "./infotypes/actionStatus.js";

const TodoRepo = ORM.getRepository(Note);

export const insertTask = async (
  req: Request<Note>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { body } = req;

  try {
    const bodyWithDateAndUUid = [
      {
        ...body,
        createdAt: new Date(),
        id: uuidv4(),
      },
    ];
    const task = plainToInstance(Note, bodyWithDateAndUUid);

    for (const ts of task) {
      const errors = await validate(ts);
      if (errors.length) throw errors[0];
    }
    await TodoRepo.insert(task);

    res.send(save_sucsess);
  } catch (error) {
    console.log(error);

    res.send(save_error);
    next(error);
  }
};

export const updateTask = async (
  req: Request<Note>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { body } = req;

  try {
    const { affected = 0 } = await TodoRepo.update(
      { id: body.id },
      { ...body, createdAt: new Date() }
    );

    if (affected === 0) res.send(no_changes);
    else res.send(save_sucsess);
  } catch (error) {
    res.send(save_error);
    next(error);
  }
};

export const deleteTask = async (
  req: Request<number[]>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { body } = req;

  try {
    await TodoRepo.delete(body);
    res.send({ ...save_sucsess, title: "Note deleted" });
  } catch (error) {
    res.send(save_error);
    next(error);
  }
};

export const getNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const notes = await TodoRepo.find();
    res.send(notes);
  } catch (error) {
    next(error);
  }
};


