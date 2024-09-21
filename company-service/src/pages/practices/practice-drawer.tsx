import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Container, Drawer, Stack, TextField } from "@mui/material";
import { useToast } from "../../shared/hooks/use-toast";
import { SuccessToast } from "../../shared/components/toast/success-toast";
import { CreatePracticeDTO, useCreatePractices } from "../../shared/react-query/practices/use-create-practices";
import { ControlledForm } from "../../shared/components/ControlledForm";

interface PracticeDrawerProps {
   isVisible: boolean;
   closeDrawer: () => void;
   editArea?: any;
}

export const PracticeDrawer: FC<PracticeDrawerProps> = ({ closeDrawer, isVisible, editArea: editPractice }) => {
   const methods = useForm<CreatePracticeDTO>({
      defaultValues: editPractice ?? null,
   });
   const { isVisible: isVisibleToast, openToast, closeToast } = useToast();

   const {mutateAsync: createPractice} = useCreatePractices({
    onSuccess: () => {
        openToast()
        closeDrawer();
      },
   })
//    const {mutateAsync: updatePractice} = useUpdatePractices()


   const handleSubmit = async (data: any) => {
      if (editPractice) {
        //   updatePractice({ data, id: editArea.id });
         return;
      }
      createPractice(data);
   };
   return (
      <Drawer open={isVisible} onClose={() => closeDrawer()} transitionDuration={500} anchor="right" >
         <Container sx={{ my: "40px" }}>
            <ControlledForm methods={methods} onSubmit={methods.handleSubmit(handleSubmit)}>
                  <Stack sx={{ gap: "20px", mb: "20px" }}>
                     <TextField {...methods.register("title")} label="name" variant="outlined" />
                     <TextField {...methods.register("description")} label="description" variant="outlined" />
                     <TextField {...methods.register("work_schedule")} label="publish" variant="outlined" />
                     <TextField {...methods.register("limit")} label="addressValue" variant="outlined" />
                  </Stack>
                  <Button type="submit">Сохранить</Button>
            </ControlledForm>
         </Container>
         <SuccessToast isVisible={isVisibleToast} closeToast={closeToast} text={"Площадка успешно создана"} />
      </Drawer>
   );
};
