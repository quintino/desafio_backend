import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {

    @Get()
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: To,
    })
    findOne(@Param('id') id: string): Cat {
      return this.catsService.findOne(+id);
    }

    @Get(':id')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Cat,
    })
    findOne(@Param('id') id: string): Cat {
      return this.catsService.findOne(+id);
    }    

}
