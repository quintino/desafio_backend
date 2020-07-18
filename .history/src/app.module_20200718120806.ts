import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { or } from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(Orm.config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
