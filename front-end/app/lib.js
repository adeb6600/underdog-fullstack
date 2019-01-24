 
 import axios from 'axios'
import { APIURL } from './constants';

 export const apiInstance  = axios.create({
    baseURL: `${APIURL}`,
 })