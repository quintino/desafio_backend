import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([To]),
    PassportModule,
  ],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}
