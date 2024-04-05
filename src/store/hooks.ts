import type { AppDispatch, RootState } from "./store";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from "react-redux";

export const useSelector = useReduxSelector.withTypes<RootState>();
export const useDispatch = useReduxDispatch.withTypes<AppDispatch>();
