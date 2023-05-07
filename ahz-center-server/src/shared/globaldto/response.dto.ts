import { HttpStatus, Type } from "@nestjs/common";

export class configReturnError {
  data: any;
  debug?: boolean = false;
}

export class configReturnData {
  data: returnResponseDto;
  debug?: boolean = false;
}

export class configReturnRepositoryError {
  error: any;
  className: string;
  debug?: boolean = false;
}

export class returnResponseDto {
  public response: any;
  public message: string;
  public status: HttpStatus;
}

export class returnDataDto {
  public data: any;
  public response: returnResponseDto;
}

export class intResultDataDto {
  public data: any;
  public error: boolean;
}
