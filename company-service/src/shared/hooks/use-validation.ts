/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import * as yup from 'yup';
import { isJsonString, isValidDayMonthYearDateString, latinNumberDashScoreDotTextRegex, urlRegex } from '../utils/string-utils';


export const useValidation = () => {

  return useMemo(() => {
    return {
      number: yup
        .number()
        .nullable()
        .transform((value) => (isNaN(value) ? undefined : value)),
      requiredNumber: yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .required("requiredField")
        .nullable()
        .transform((value) => (isNaN(value) ? undefined : value)), 
      string: yup.string().nullable(),
      requiredStringWithToggle: yup
        .string()
        .nullable()
        .when('toggle', {
          is: false,
          then: yup.string().required("requiredField"),
        }),
      boolean: yup.boolean().nullable(),
      array: yup.array().nullable(),
      requiredAny: yup.mixed().required("requiredField"),
      requiredObject: yup.object().required("requiredField").nullable(),
      unRequiredObject: yup.object().nullable(),

      requiredStringSimple: yup.string().required("requiredField"),

      requiredStringStrict: yup
        .string()
        .required('requiredField')
        .matches(latinNumberDashScoreDotTextRegex, {
          message: `Наименование может содержать:
      Заглавные или строчные латинские буквы: от A до Z (26 символов),
      Символы . - _,
      Цифры 0-9`,
          excludeEmptyString: true,
        })
        .nullable(),

      fileList: yup
        .mixed<FileList>()
        .nullable()
        .test('file-upload', "fileMustBeUpload",
            //@ts-ignore
             (files) => {
          if ((files?.length ?? 0) >= 0 || null) return true;
        }),
      requiredFileList: yup
        .mixed<FileList>()
        .nullable()
        .test('file-upload', "fileMustBeUpload", (files) => {
          return files?.length !== 0;
        }),

      requiredJSONString: yup
        .string()
        .required("requiredField")
        .max(10000, undefined)
        .test('is-json', "isNotJSON", isJsonString),

      requiredUrl: yup
        .string()
        .required("requiredField")
        .matches(urlRegex, {
          message: "mustBeUrl",
          excludeEmptyString: true,
        })
        .nullable(),
      linkAndTitle: yup
        .object()
        .transform((value) => {
          const transformValue = {};

          Object.keys(value).forEach((key) =>
            //@ts-ignore
            value[key] ? (transformValue[key] = value[key]) : (transformValue[key] = ''),
          );

          return transformValue;
        }) // Преобразование объекта со значением null в строки иначе происходит проверка по каждому полю
        .notRequired()
        .shape(
          {
            title: yup.string(),
            link: yup
              .string()
              .matches(urlRegex, {
                message: "mustBeUrl",
                excludeEmptyString: true,
              })
              .when('title', {
                //@ts-ignore
                is: (title) => title?.length > 0,
                then: yup.string().url().required("requiredField"),
              }),
          },
          [
            ['title', 'link'],
            ['link', 'title'],
          ],
        ),

      url: yup
        .string()
        .matches(urlRegex, {
          message: "mustBeUrl",
          excludeEmptyString: true,
        })
        .nullable(),

      tags: yup.array().of(
        yup.object().shape({
          tagName: yup.string(),
        }),
      ),

      person: yup
        .object()
        .shape({
          login: yup.string(),
          name: yup.string(),
        })
        .nullable(),

      persons: yup.array().of(yup.object()).nullable(),
      containerOfLinkAndTitle: yup.array().of(yup.string()),
      containerOfEntityLinkAndTitle: yup.array().of(yup.object()).nullable(),
      containerOfLink: yup.array().of(yup.string()),
      date: yup
        .string()
        .transform((value) => (value === '__.__.____' ? null : value))
        .test('is-date', "incorrectDateValue", (value) => {
          if (!value) {
            return true;
          }

          return isValidDayMonthYearDateString(value);
        })
        .nullable(),
    };
  }, []);
};

export type UseValidationReturnType = ReturnType<typeof useValidation>;
