import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment, Movie } from "@/types";
export type FilmState = {
    items: Movie[];
    count: number;
    // page: number;
    // params:{
    //     year?: string
    //     genre?: string
    //     rating?: string
    // },
    item: Movie | null
    comments:Comment[]
}

const initialState: FilmState = {
    items: [],
    count: 0,
    // page: 1,
    // params:{},
    item:null,
    comments:[]
}

const filmSlice = createSlice({// создаем слайс 
    name: "films",
    initialState,
    reducers: {// определяем редюсеры
        setItems: (state, action: PayloadAction<{items: Movie[], count: number}>) => {// создаем редюсер для списка фильмов
            state.items = action.payload.items;
            state.count = action.payload.count;
        },
        // setPage: (state, action: PayloadAction<number>) => {// создаем редюсер для изменения страницы
        //     state.page = action.payload;
        // },
        // setParams: (state, action: PayloadAction<{year?: string, genre?: string, rating?: string}>) => {// обновляем параметры фильтров(год, жанр, рейтинг)
        //     state.params = action.payload;
        // },
        setItem:(state,action:PayloadAction<Movie>)=>{
            state.item = action.payload;
        },
        setComments:(state,action:PayloadAction<Comment[]>)=>{
            state.comments = action.payload;
        }
        
    }
})

export const { setItems,setComments,setItem} = filmSlice.actions;// экспортируем редюсеры
export default filmSlice.reducer;// экспортируем слайс

