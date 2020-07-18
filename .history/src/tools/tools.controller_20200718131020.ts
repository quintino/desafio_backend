import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('t')
@Controller('tools')
export class ToolsController {}
