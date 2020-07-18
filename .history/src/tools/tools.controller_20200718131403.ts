import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Tools } from 'src/entities/tools.entity';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {

    constructor(
        private cService: TalentService,
        private readonly uploadService: UploadService,
        private readonly downloadService: DownloadService,
    ) {
        super();
        super.service = this.cService;
    }

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
    findByTag(@Param('tag') tag: string): Tools[] {
      return this.catsService.findOne(+id);
    }    

}
