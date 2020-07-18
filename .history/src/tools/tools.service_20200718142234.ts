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
        const array = [];
        for (const item of list) {
            const tags = item.tags.split('|');
            for (const obj of tags) {
                if (obj === tag) {
                    array.push(item);
                    break;
                }
            }
        }
        return array;
    }

    async create(tool: T): Promise<T> {
        return await this.repository.save(object);
    }

}
