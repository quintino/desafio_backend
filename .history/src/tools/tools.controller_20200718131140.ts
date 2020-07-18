import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {

    @Get(':id')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Cat,
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
