export module GeneralFunctionsUtil {
  export const validAttributes = <T extends Object>(
    obj: any,
    Entity: new () => T,
    config?: Util_validAttributes,
  ) => {
    let attrError: string[] = [];
    let keys: string[] = Object.keys(new Entity());
    if (config?.ignore?.length) {
      keys = keys.filter((key) => !config.ignore.includes(key));
    }

    for (const i of keys) {
      if (obj[i] === null || obj[i] === undefined || obj[i] === '')
        attrError.push(i);
    }
    return {
      attrError: attrError,
      validation: attrError.length ? false : true,
    };
  };

  export const setObjectToUpdate = <T extends Object>(
    Entity: new () => T,
    obj: any,
    attr: string[] = [],
  ) => {
    const onlyAttrToUpdate = Object.keys(new Entity()).filter(
      (el) => !attr.includes(el),
    );
    let objUpdate: any = {};
    for (const i of onlyAttrToUpdate) {
      objUpdate[i] = obj[i];
    }
    return objUpdate;
  };
}

interface Util_validAttributes {
  ignore?: string[];
}
