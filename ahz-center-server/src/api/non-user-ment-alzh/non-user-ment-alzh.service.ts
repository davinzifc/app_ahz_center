import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateNonUserMentAlzhDto } from './dto/create-non-user-ment-alzh.dto';
import { UpdateNonUserMentAlzhDto } from './dto/update-non-user-ment-alzh.dto';
import { NonUserMentAlzhDto } from './dto/non-user-ment-alzh.dto';
import { returnResponseDto } from '../../shared/globaldto/response.dto';
import { ResponseHandler } from '../../shared/handlers/response.handler';
import { UserRepository } from '../../auth/user/user.repository';
import { Like } from 'typeorm';
import { NonUserMentAlzhRepository } from './non-user-ment-alzh.repository';
import { MessageStatus } from '../../shared/constants/message-status.const';
import { test_data } from '../../shared/constants/test-data.const';
import { UserToken } from '../../shared/globaldto/user-token.dto';
import { MentAlzhRepository } from '../ment-alzh/ment-alzh.repository';

@Injectable()
export class NonUserMentAlzhService {
  private readonly regexEmailData = /([A-Z].*.:.*.(\n|.))/g;

  constructor(
    private readonly _responseHandler: ResponseHandler,
    private readonly _userRepository: UserRepository,
    private readonly _nonUserMentAlzhRepository: NonUserMentAlzhRepository,
    private readonly _mentAlzhRepository: MentAlzhRepository,
  ) {}

  create(createNonUserMentAlzhDto: CreateNonUserMentAlzhDto) {
    return 'This action adds a new nonUserMentAlzh';
  }

  findAll() {
    return `This action returns all nonUserMentAlzh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nonUserMentAlzh`;
  }

  update(id: number, updateNonUserMentAlzhDto: UpdateNonUserMentAlzhDto) {
    return `This action updates a #${id} nonUserMentAlzh`;
  }

  remove(id: number) {
    return `This action removes a #${id} nonUserMentAlzh`;
  }

  async getPendingNoAssigned() {
    try {
      const data = await this._nonUserMentAlzhRepository.find({
        where: { is_active: true, is_assigned: false },
      });
      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.NonUserMentAlzh.OK,
          response: data,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  /**
   *
   * @returns
   *
   */
  async getDataFromEmail(): Promise<returnResponseDto> {
    try {
      //TODO: Arreglar cuando se tenga la libreria de google funcionando!!!!!!!!!!!!!!!!
      const emailObjectData: NonUserMentAlzhDto[] = this.simulacro(15).map(
        (el) => this.processingEmailData(el),
      );
      const dataSave = await this._nonUserMentAlzhRepository.save(
        emailObjectData,
      );
      return this._responseHandler.dataReturn({
        data: {
          message: MessageStatus.NonUserMentAlzh.OK_CREATE,
          response: dataSave,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }

  //TODO: Eliminar esto cuando se termine!!!!!!!!!!!
  private simulacro(a: number = 1): string[] {
    const dataRange = [...Array(a).keys()];
    return dataRange.map((el) => {
      const data = `¡Gracias por usar MentAlzh! A continuación se muestran sus resultados

            Información personal:
            Nombre: ${test_data[Math.round(Math.random() * 1000)].user_name}
            Edad: ${Math.round(Math.random() * 90 + 18)}
            Sexo: ${Math.round(Math.random()) ? `Masculino` : `Femenino`}
              
            Puntuación total: 16 / 16 - Tiempo: 02:32
            Puntos por prueba:   
            Orientación 1: ${Math.round(
              Math.random() * 2,
            )} / 2 - Tiempo: ${test_data[
        Math.round(Math.random() * 1000)
      ].orientacion_1_time.replace(/( (AM|PM))/g, '')}
            Orientación 2 (reloj): ${Math.round(
              Math.random() * 1,
            )} / 1 - Tiempo: ${test_data[
        Math.round(Math.random() * 1000)
      ].orientacion_2_time.replace(/( (AM|PM))/g, '')}
            Fijación: ${Math.round(
              Math.random() * 1,
            )} / 1 - Tiempo: ${test_data[
        Math.round(Math.random() * 1000)
      ].fijacion_time.replace(/( (AM|PM))/g, '')}
            Lenguaje: ${Math.round(
              Math.random() * 4,
            )} / 4 - Tiempo: ${test_data[
        Math.round(Math.random() * 1000)
      ].lenguaje_time.replace(/( (AM|PM))/g, '')}
            Cálculo: ${Math.round(Math.random() * 5)} / 5 - Tiempo: ${test_data[
        Math.round(Math.random() * 1000)
      ].calculo_time.replace(/( (AM|PM))/g, '')}
            Memoria: ${Math.round(Math.random() * 3)} / 3 - Tiempo: ${test_data[
        Math.round(Math.random() * 1000)
      ].memoria_time.replace(/( (AM|PM))/g, '')}`;
      console.log(data);
      return data;
    });
  }

  private processingEmailData(dataEmail: string): NonUserMentAlzhDto {
    const processArray: any[][] = dataEmail
      .match(this.regexEmailData)
      .map((e) => e.split('-'))
      .map((e) => e.map((i) => i.trim().split(/: /)[1]?.trim().split('/')[0]));

    if (!processArray.length) return null;
    let newData: NonUserMentAlzhDto = new NonUserMentAlzhDto();
    newData.user_name = processArray[0][0];
    newData.edad = processArray[1][0];
    newData.sexo = processArray[2][0];
    newData.orientacion_1 = processArray[5][0];
    newData.orientacion_1_time = processArray[5][1];
    newData.orientacion_2 = processArray[6][0];
    newData.orientacion_2_time = processArray[6][1];
    newData.fijacion = processArray[7][0];
    newData.fijacion_time = processArray[7][1];
    newData.lenguaje = processArray[8][0];
    newData.lenguaje_time = processArray[8][1];
    newData.calculo = processArray[9][0];
    newData.calculo_time = processArray[9][1];
    newData.memoria = processArray[10][0];
    newData.memoria_time = processArray[10][1];
    return newData;
  }

  async linkDataByUserId(user_id: number, data_id: number, user: UserToken) {
    try {
      const data = await this._nonUserMentAlzhRepository.findOne({
        where: {
          non_user_ment_alzh_id: data_id,
        },
      });

      if (!data) {
        throw this._responseHandler.throw({
          message: 'Data not exist',
          response: null,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      if (data?.is_assigned) {
        throw this._responseHandler.throw({
          message: 'Data already linked',
          response: null,
          status: HttpStatus.BAD_REQUEST,
        });
      }

      const res = await this._mentAlzhRepository.save({
        user_id: user_id,
        fijacion: data.fijacion,
        fijacion_time: data.fijacion_time,
        lenguaje: data.lenguaje,
        lenguaje_time: data.lenguaje_time,
        memoria: data.memoria,
        memoria_time: data.memoria_time,
        orientacion_1: data.orientacion_1,
        orientacion_1_time: data.orientacion_1_time,
        orientacion_2: data.orientacion_2,
        orientacion_2_time: data.orientacion_2_time,
        calculo: data.calculo,
        calculo_time: data.calculo_time,
        created_by: user.user_id,
        non_user_ment_alzh_id: data.non_user_ment_alzh_id,
      });

      await this._nonUserMentAlzhRepository.update(data.non_user_ment_alzh_id, {
        is_assigned: true,
        update_by: user.user_id,
      });

      return this._responseHandler.dataReturn({
        data: {
          message: 'Data linked successfully',
          response: res,
          status: HttpStatus.OK,
        },
      });
    } catch (error) {
      return this._responseHandler.errorReturn({ data: error, debug: true });
    }
  }
}
