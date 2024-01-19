import axios from "axios";
import { APIROOT } from "../Config";

export const save = (table, info) => {
  axios.post(APIROOT + table, info).then((r) => {
    
  });
};


