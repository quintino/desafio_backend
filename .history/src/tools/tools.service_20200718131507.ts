import { Injectable } from '@nestjs/common';
import { Tools } from 'src/entities/tools.entity';

@Injectable()
export class ToolsService {

    listAll(): Tools[] {
        return null;
    }


}
