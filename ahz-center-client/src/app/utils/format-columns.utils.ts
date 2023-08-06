import * as FileSaver from 'file-saver';

export module ColumnsUtils {
  export const ColumnIgnore: ColumnIgnore = {
    GlOBAL: [
      'created_at',
      'created_by',
      'updated_at',
      'updated_by',
      'is_active',
    ],
    CUSTOM: {
      1: {
        body: ['user_id', 'non_user_ment_alzh_id'],
        id: 'ment_alzh_id',
      },
    },
  };

  export const format = (
    columns: string[],
    reportId?: number,
    id: boolean = false
  ) => {
    columns = columns.filter((item) => !ColumnIgnore.GlOBAL.includes(item));
    if (reportId) {
      columns = columns.filter(
        (item) =>
          ![
            ...ColumnIgnore.CUSTOM[reportId].body,
            ColumnIgnore.CUSTOM[reportId].id,
          ].includes(item)
      );
      if (id) {
        columns.unshift(ColumnIgnore.CUSTOM[reportId].id);
      }
    }
    const attr = columns;
    const title = columns.map((el) => {
      if (reportId) {
        if (el === ColumnIgnore.CUSTOM[reportId].id) {
          return '#';
        }
      }
      const text = el.replace(/_/g, ' ');
      return text.length
        ? `${text[0].toUpperCase()}${text.substring(1)}`
        : text;
    });
    return {
      attr,
      title,
    };
  };

  export const exportXlsx = (
    data: any,
    fileName: string,
    SheetNames?: string[]
  ) => {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = {
        Sheets: { data: worksheet },
        SheetNames: SheetNames?.length ? SheetNames : ['data'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      saveAsExcelFile(excelBuffer, fileName);
    });
  };

  const saveAsExcelFile = (buffer: any, fileName: string): void => {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  };
}

interface ColumnIgnore {
  GlOBAL: string[];
  CUSTOM: MyObj;
}

interface MyObj {
  [key: string]: { body: string[]; id: string };
}
