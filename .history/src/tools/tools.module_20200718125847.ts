import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { Tools } from 'src/entities/tools.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tools]),
    PassportModule,
  ],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}
