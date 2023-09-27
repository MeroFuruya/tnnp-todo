import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './note/note.controller';

@Module({
  imports: [],
  controllers: [AppController, NoteController],
  providers: [AppService],
})
export class AppModule {}
