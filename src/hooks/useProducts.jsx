import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getDocuments,
  addDocument,
  deleteDocument,
  updateDocument,
} from "../api/fireStoreFunctions";
