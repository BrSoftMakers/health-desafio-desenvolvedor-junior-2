import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [AuthModule, PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
