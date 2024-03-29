/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ToursModule } from './tours/tours.module';
import { BookingsModule } from './bookings/bookings.module';

// eslint-disable-next-line prettier/prettier
@Module({
  imports: [AuthModule, ToursModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
