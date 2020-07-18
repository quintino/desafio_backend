import { Injectable } from '@nestjs/common';
import { Tools } from '../entities/tools.entity';

@Injectable()
export class ToolsService {

    async listAll(): Tools[] {
        return await this.sRepository.find({
            where: [{ eventId, active }],
            relations: [ 'locks' ],
        });
    }

    findByTag(tag: string): Tools[] {
        return null;
    }

}
