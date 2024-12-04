import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getDocuments,
  addDocument,
  deleteDocument,
  updateDocument,
} from "../api/fireStoreFunctions";

export const useGetProduct = (collectionName) => {
  return useQuery({
    queryKey: [collectionName],
    queryFn: () => getDocuments(collectionName),
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ collectionName, data }) => addDocument(collectionName, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
  return {
    addProduct: mutation.mutate,
    isAdding: mutation.isLoading,
    isAddingError: mutation.isError,
    addError: mutation.error,
  };
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["products"],
    mutationFn: ({ collectionName, productId }) =>
      deleteDocument(collectionName, productId),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
  return {
    deleteProduct: mutation.mutate,
    isDeleting: mutation.isLoading,
    isDeletingError: mutation.isError,
    deleteError: mutation.error,
  };
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["products"],
    mutationFn: ({ collectionName, productId, updatedData }) =>
      updateDocument(collectionName, productId, updatedData),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
  return {
    updateProduct: mutation.mutate,
    isUpdating: mutation.isLoading,
    isUpdatingError: mutation.isError,
    updateError: mutation.error,
  };
};
