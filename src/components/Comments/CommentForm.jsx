import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { commentsSchema } from "../../hooks/validationSchema";
import { CommentFormContent } from "./CommentFormContent";

export const CommentForm = ({ handleAddComment }) => {
  const formMethods = useForm({ resolver: zodResolver(commentsSchema) });

  return (
    <FormProvider {...formMethods}>
      <CommentFormContent handleAddComment={handleAddComment} />
    </FormProvider>
  );
};
