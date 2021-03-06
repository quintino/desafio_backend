import { Injectable } from '@nestjs/common';
import { Tools } from '../entities/tools.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {

    constructor(@InjectRepository(Tools) private repository: Repository<Tools>) {
        super.repository = this.sRepository;
        super.relations = [ 'locks', 'event' ];
    }

    async listAll(): Promise<Tools[]> {
        return await this.sRepository.find({
            where: [{ eventId, active }],
            relations: [ 'locks' ],
        });
    }

    async findByTag(tag: string): Promise<Tools[]> {
        return null;
    }

}
