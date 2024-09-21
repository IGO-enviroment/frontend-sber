import  { PropsWithChildren } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { AnyFunctionType } from '../types';

interface IFormProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: AnyFunctionType
}

export function ControlledForm<T extends FieldValues = never>({ methods, children, onSubmit }: PropsWithChildren<IFormProps<T>>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods?.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}