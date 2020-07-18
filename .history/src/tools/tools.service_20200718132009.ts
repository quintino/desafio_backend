import { Injectable } from '@nestjs/common';
import { Tools } from '../entities/tools.entity';

@Injectable()
export class ToolsService {

    async listAll(): Tools[] {
        return null;
    }

    findByTag(tag: string): Tools[] {
        return null;
    }

}
