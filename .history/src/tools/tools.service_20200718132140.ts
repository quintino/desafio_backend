import { Injectable } from '@nestjs/common';
import { Tools } from '../entities/tools.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {

    constructor(@InjectRepository(Tools) private repository: Repository<Tools>) {
    }

    async listAll(): Promise<Tools[]> {
        return await this.repository.find({
            where: [{ eventId, active }],
        });
    }

    async findByTag(tag: string): Promise<Tools[]> {
        return null;
    }

}
