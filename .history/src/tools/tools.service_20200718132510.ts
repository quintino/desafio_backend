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
        });
    }

    async findByTag(tag: string): Promise<Tools[]> {
        const list = await this.listAll();
        
        return await this.repository.find({
            where: [{ tags: contains tag }],
        });
    }

}
