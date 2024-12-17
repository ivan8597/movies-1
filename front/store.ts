import { configureStore } from '@reduxjs/toolkit';
import filmSliceReducer  from './slices/filmSlice';


export const store = configureStore({
  reducer: {
    films: filmSliceReducer,// объект, где ключом является имя состояния (films), а значением — редюсер filmSliceReducer
  },
 
});
export type RootState = ReturnType<typeof store.getState>;// определение типа RootState

