import { Injectable } from '@nestjs/common';
import { CreateMentAlzhDto } from './dto/create-ment-alzh.dto';
import { UpdateMentAlzhDto } from './dto/update-ment-alzh.dto';

@Injectable()
export class MentAlzhService {
  create(createMentAlzhDto: CreateMentAlzhDto) {
    return 'This action adds a new mentAlzh';
  }

  findAll() {
    return `This action returns all mentAlzh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentAlzh`;
  }

  update(id: number, updateMentAlzhDto: UpdateMentAlzhDto) {
    return `This action updates a #${id} mentAlzh`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentAlzh`;
  }
}
