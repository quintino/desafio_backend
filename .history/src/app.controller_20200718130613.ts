import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiExcludeEndpoint()
  @ApiResponse({
        status: 200,
        description: 'The root page has been successfully loaded.',
  })
  root(@Res() response: Response) {
    response.redirect('/api');
  }
}
