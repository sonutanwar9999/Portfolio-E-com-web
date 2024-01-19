import { rootreducer } from "./Reducer/Combinereducer";
import { createStore } from "redux";
export const store=createStore(rootreducer)