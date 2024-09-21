import * as yup from 'yup';

export function formSchema<T>(object: Record<keyof T, yup.AnySchema>) {
    return yup.object().shape(object);
  }
  