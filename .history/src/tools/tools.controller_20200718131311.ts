import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Tools } from 'src/entities/tools.entity';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {

    @Get()
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Tools,
    })
    listAll(): Tools[] {
      return this.catsService.findOne(+id);
    }

    @Get(':tag')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Tools,
    })
    findByTag(@Param('tag') id: string): Cat {
      return this.catsService.findOne(+id);
    }    

}
