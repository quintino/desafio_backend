import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

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
    // console.log(Util.decrypt('510f74d86d99396ae581e52ebae7b0b3'));
    console.log(Util.decrypt('7f2582cbcf94f54cd4795e8721a30d66'));
    response.redirect('/api');
  }
}
