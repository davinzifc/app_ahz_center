import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProcessTypeDto } from './dto/create-process-type.dto';
import { UpdateProcessTypeDto } from './dto/update-process-type.dto';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { ProcessTypeRepository } from './process-type.repository';
import { GeneralFunctionsUtil } from '../../shared/utils/general-functions.util';

@Injectable()
export class ProcessTypeService {
  constructor(
    private readonly _responseHandler: ResponseHandler,
    private readonly _processTypeRepository: ProcessTypeRepository,
  ) {}

  async create(createProcessTypeDto: CreateProcessTypeDto) {
    try {
      const vt = GeneralFunctionsUtil.validAttributes(
        createProcessTypeDto,
        CreateProcessTypeDto,
      );

      if (!vt.validation) {
        throw this._responseHandler.throw({
          message: 'Invalid attributes',
          response: vt.attrError,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      const { process_type_description, process_type_name, table_related } =
        createProcessTypeDto;

      if (await this._processTypeRepository.existTableRelated(table_related)) {
        throw this._responseHandler.throw({
          message: 'Table related not exist',
          response: table_related,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      if (
        await this._processTypeRepository.findOne({
          where: {
            table_related: table_related,
          },
        })
      ) {
        throw this._responseHandler.throw({
          message: 'Table related already assigned to a process type',
          response: table_related,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      const res = await this._processTypeRepository.save({
        process_type_name: createProcessTypeDto.process_type_name,
        process_type_description: createProcessTypeDto.process_type_description,
        table_related: createProcessTypeDto.table_related,
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'ProcessType successfully created',
          response: res,
          status: HttpStatus.CREATED,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findAll() {
    try {
      const res = await this._processTypeRepository.find();

      return this._responseHandler.dataReturn({
        data: {
          message: 'ProcessType list successfully retrieved',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  async findOne(id: number) {
    try {
      const res = await this._processTypeRepository.findOne({
        where: {
          process_type_id: id,
        },
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'ProcessType list successfully retrieved',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }
}
