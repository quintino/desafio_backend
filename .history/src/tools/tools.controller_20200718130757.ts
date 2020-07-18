import { Controller } from '@nestjs/common';
import { ApiUseTags, A } from '@nestjs/swagger';

@ApiUseTags('tools')
@Controller('tools')
export class ToolsController {}
