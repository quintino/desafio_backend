import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Tools } from '../entities/tools.entity';
import { ToolsService } from './tools.service';
import { Response } from 'express';

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
    async listAll(@Res() response: Response) {
        const list = await this.service.listAll();
        const array = [];
        for (const item of list) {
            
        }
        // return this.service.listAll();
    }

    @Get(':tag')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Tools,
    })
    async findByTag(@Param('tag') tag: string, @Res() response: Response) {
    //   return this.service.findByTag(tag);
    }    

}
