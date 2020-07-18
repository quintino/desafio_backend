import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('tools')
@Controller('tools')
export class ToolsController {}
