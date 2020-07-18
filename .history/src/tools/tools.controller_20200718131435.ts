import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Tools } from 'src/entities/tools.entity';
import { ToolsService } from './tools.service';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {

    constructor(
        private service: ToolsService,
    ) {
    }

    @Get()
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Tools,
    })
    listAll(): Tools[] {
      return this.service.listAll();
    }

    @Get(':tag')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Tools,
    })
    findByTag(@Param('tag') tag: string): Tools[] {
      return this.service.findByTag(+id);
    }    

}
