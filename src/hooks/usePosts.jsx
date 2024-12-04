import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getDocuments,
  addDocument,
  deleteDocument,
  updateDocument,
} from "../api/fireStoreFunctions";

export const useGetPosts = (collectionName = "posts") => {
  return useQuery({
    queryKey: [collectionName],
    queryFn: () => getDocuments(collectionName),
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ collectionName, data }) => addDocument(collectionName, data),
    onSuccess: (_, { collectionName }) =>
      queryClient.invalidateQueries({ queryKey: [collectionName] }),
  });
  return {
    addPost: mutation.mutate,
    isAdding: mutation.isLoading,
    isAddingError: mutation.isError,
    addError: mutation.error,
  };
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ collectionName, postId }) =>
      deleteDocument(collectionName, postId),
    onSuccess: (_, { collectionName }) =>
      queryClient.invalidateQueries([collectionName]),
  });
  return {
    deletePost: mutation.mutate,
    isDeleting: mutation.isLoading,
    isDeletingError: mutation.isError,
    deleteError: mutation.error,
  };
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ collectionName, postId, updatedData }) =>
      updateDocument(collectionName, postId, updatedData),
    onSuccess: (_, { collectionName }) =>
      queryClient.invalidateQueries([collectionName]),
  });
  return {
    updatePost: mutation.mutate,
    isUpdating: mutation.isLoading,
    isUpdatingError: mutation.isError,
    updateError: mutation.error,
  };
};
