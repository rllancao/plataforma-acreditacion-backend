import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Ajusta la URL de tu frontend
  app.enableCors({ origin: 'http://localhost:4200', credentials: true });
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
