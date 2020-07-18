import { Controller } from '@nestjs/common';
import { ApiUseTags, Ae } from '@nestjs/swagger';

@ApiUseTags('tools')
@Controller('tools')
export class ToolsController {}
