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

@Injectable()
export class NonUserMentAlzhService {
  private readonly regexEmailData = /([A-Z].*.:.*.(\n|.))/g;

  constructor(
    private readonly _responseHandler: ResponseHandler,
    private readonly _userRepository: UserRepository,
    private readonly _nonUserMentAlzhRepository: NonUserMentAlzhRepository,
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
}
