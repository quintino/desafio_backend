import { Controller } from '@nestjs/common';
import { ApiUseTags, ApiExcludeEndpoint, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('tools')
@Controller('tools')
export class ToolsController {}
