import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { Tools } from 'src/entities/tools.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tools]),
  ],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}
