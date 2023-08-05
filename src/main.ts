import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //Pipe dùng để xác thực dữ liệu đầu vào xem có đúng với quy định được đưa ra hay không
  //trước khi được đi tiếp vào route controller
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
