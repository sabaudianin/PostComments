import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getDocuments,
  addDocument,
  deleteDocument,
  updateDocument,
  getDocumentById,
} from "../api/fireStoreFunctions";

// Get all posts from a collection
export const useGetPosts = (collectionName) => {
  return useQuery({
    queryKey: [collectionName],
    queryFn: async () => {
      const data = await getDocuments(collectionName);
      console.log("useQuery: received data", data);
      return data;
    },
    onError: (error) => {
      console.error("useQuery: error fetching data", error);
    },
  });
};

// Add a new post
export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ collectionName, data }) => addDocument(collectionName, data),
    onSuccess: (_, { collectionName }) =>
      queryClient.invalidateQueries([collectionName]),
  });
};

// Delete a post
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ collectionName, postId }) =>
      deleteDocument(collectionName, postId),
    onSuccess: (_, { collectionName }) =>
      queryClient.invalidateQueries([collectionName]),
  });
};

// Update a post
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ collectionName, postId, updatedData }) =>
      updateDocument(collectionName, postId, updatedData),
    onSuccess: (_, { collectionName }) =>
      queryClient.invalidateQueries([collectionName]),
  });
};

// Get post by ID
export const useGetPostById = (id, collectionName) => {
  return useQuery({
    queryKey: [collectionName, id],
    queryFn: () => getDocumentById(collectionName, id),
    enabled: !!id,
  });
};
