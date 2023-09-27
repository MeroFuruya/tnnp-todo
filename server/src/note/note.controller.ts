import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { database } from '../database';
import { Note } from '../models/note.model';
import { randomUUID } from 'crypto';

import { api } from '../../../shared';

@Controller('note')
export class NoteController {
  constructor() {}

  @Get()
  async getNote(): Promise<api.Note.GetMany> {
    return {
      notes: await database.getRepository(Note).find({
        order: {
          createdAt: 'DESC',
        },
      }),
    };
  }

  @Post()
  async createNote(@Body() body: api.Note.Post): Promise<api.Note.Get> {
    const note = new Note();
    note.id = randomUUID();
    note.title = body.title;
    note.description = body.description;
    note.createdAt = new Date();
    if (body.doneAt !== undefined) {
      note.doneAt = body.doneAt;
    }
    await database.getRepository(Note).save(note);
    return note;
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string): Promise<void> {
    const note = await database.getRepository(Note).findOne({
      where: {
        id,
      },
    });
    if (!note) {
      throw new Error('Note not found');
    }
    await database.getRepository(Note).delete(id);
  }

  @Get(':id')
  async getNoteById(@Param('id') id: string): Promise<api.Note.Get> {
    const note = await database.getRepository(Note).findOne({
      where: {
        id,
      },
    });
    if (!note) {
      throw new Error('Note not found');
    }
    return note;
  }

  @Put(':id')
  async updateNote(
    @Param('id') id: string,
    @Body() body: api.Note.Put,
  ): Promise<api.Note.Get> {
    const note = await database.getRepository(Note).findOne({
      where: {
        id,
      },
    });
    if (!note) {
      throw new Error('Note not found');
    }

    if (body.title) {
      note.title = body.title;
    }

    if (body.description) {
      note.description = body.description;
    }

    if (body.doneAt !== undefined) {
      note.doneAt = body.doneAt;
    }

    await database.getRepository(Note).save(note);
    return note;
  }
}
