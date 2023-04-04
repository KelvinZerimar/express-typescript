import { DiaryEntry } from '../types';
import diaryData from './diaries.json';
// Como se resuelve Typescript 
// "."tsx",".ts" ,".node",".js",".json"

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry> // Asumo la responsabilidad de que lo que me viene tiene los mismos tipos de los valores


export const getEntries = (): DiaryEntry[] => diaries;

export const addEntry = (): undefined => undefined;



