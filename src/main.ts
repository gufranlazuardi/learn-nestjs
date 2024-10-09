/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3333
  await app.listen(`${PORT}` || 3000);
  console.log(`Server is running on port : ${PORT}`)
}
bootstrap();
