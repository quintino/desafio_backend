import { Controller, Get, Param, Res, HttpStatus, Post, Body, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Tools } from '../entities/tools.entity';
import { ToolsService } from './tools.service';
import { Response } from 'express';
import { ToolsDTO } from 'src/dto/tools.dto';
import { Util } from 'src/util';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {

    constructor(
        private service: ToolsService,
    ) {
    }

    private processItem(item: Tools): any {
        return {
            id: item.id,
            title: item.title,
            link: item.link,
            description: item.description,
            tags: item.tags.split('|')
        }
    }

    private processList(list: Tools[]): any {
        const array = [];
        for (const item of list) {
            array.push(this.processItem(item));
        }
        return array;
    }

    @Get()
    @ApiResponse({
      status: 200,
      description: 'Lista completa de ferramentas',
      type: Tools,
    })
    async listAll(@Res() response: Response) {
        const list = await this.service.listAll();
        response.status(HttpStatus.OK).json(this.processList(list));
    }

    @Get(':tag')
    @ApiResponse({
      status: 200,
      description: 'Lista de ferramentas filtrada pela tag',
      type: Tools,
    })
    async findByTag(@Param('tag') tag: string, @Res() response: Response) {
        const list = await this.service.findByTag(tag);
        response.status(HttpStatus.OK).json(this.processList(list));
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Tool created.', type: Tools })
    async create(@Body() tool: ToolsDTO, @Res() response: Response) {
        const entity = {
            id: undefined,
            title: tool.title,
            link: tool.link,
            description: tool.description,
            tags: Util.convertTags(tool.tags)
        };
        const result = await this.service.create(entity);
        response.status(HttpStatus.CREATED).json(this.processItem(result));
    }

    @Delete(':id')
    @ApiResponse({ status: 204, description: 'Tool removed.', type: Tools })
    async delete(@Param('id', { ty }) id: number, @Res() response: Response) {

    }

}
