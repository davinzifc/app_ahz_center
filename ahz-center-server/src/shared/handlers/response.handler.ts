import { HttpStatus, Injectable, Logger, Req, Res } from '@nestjs/common';
import { Type } from '@nestjs/passport';
import { Request, Response } from 'express';
import { configReturnData, configReturnError, configReturnRepositoryError, intResultDataDto, returnDataDto, returnResponseDto } from '../globaldto/response.dto';

@Injectable()
export class ResponseHandler {
  private readonly _logger = new Logger(ResponseHandler.name);

  public errorReturn(config: configReturnError): returnResponseDto {
    const { data, debug } = config;
    if (debug) {
      this._logger.error(data);
    }
    return {
      response: data?.response || { data: true },
      message: data?.message || 'INTERNAL_SERVER_data',
      status: data?.status || HttpStatus.INTERNAL_SERVER_ERROR,
    };
  }

  public dataReturn(config: configReturnData): returnResponseDto {
    const { data, debug } = config;
    if (debug) {
      this._logger.debug(data);
    }
    return {
      response: data?.response,
      message: data?.message,
      status: data?.status,
    };
  }

  public throw(data: returnResponseDto) {
    return data;
  }

  public inReturnData({data, error}: intResultDataDto): intResultDataDto{
    if (error) {
      this._logger.debug(data);
    }
    return {data, error};
  }

  public sendResponse(
    res: Response,
    req: Request,
    data: returnResponseDto
  ) {
    const { message, response, status } = data;
    const ip =
      req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (status > 300) {
      this._logger.warn(
        `[${req.method}]: ${req.url} status: ${status} - By ${ip}`,
      );
    } else {
      this._logger.verbose(
        `[${req.method}]: ${req.url} status: ${status} - By ${ip}`,
      );
    }

    res.status(status).json({
      response: response || {},
      statusCode: status,
      message: message || 'Unknown error',
      timestamp: new Date().toISOString(),
      path: req.url,
    });
  };

  public repositoryErrorReturn(
    config: configReturnRepositoryError,
  ): returnResponseDto {
    const { error, className, debug } = config;
    if (debug) {
      this._logger.error(error);
    }
    return {
      response: error?.response || { error: true },
      message: `[${className}] => error: ${error}`,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    };
  }
}