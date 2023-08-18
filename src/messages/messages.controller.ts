import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages') //class decorator
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get() //method decorator
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    //body hay param sẽ là argument decorator

    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return this.messagesService.findOne(id);
  }
}
