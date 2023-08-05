import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages') //class decorator
export class MessagesController {
  @Get() //method decorator
  listMessages() {}

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    //body hay param sẽ là argument decorator
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
