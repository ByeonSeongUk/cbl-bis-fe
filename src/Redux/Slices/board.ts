// 게시물 리스트 Reducer
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Board {
    board_title: string; // 게시물 제목
    board_no: number; // 게시물 번호
    board_comment: string; // 게시물 댓글
    board_content: string; // 게시물 내용
}

export const board = createSlice({
    name: 'users',
    initialState: [
        { board_title:'제목1', board_no: 1, board_comment: '댓글1', board_content: '내용1'},
        { board_title:'제목2', board_no: 2, board_comment: '댓글2', board_content: '내용2'},
        { board_title:'제목3', board_no: 3, board_comment: '댓글3', board_content: '내용3'},
    ] as Board[], // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
    reducers: {

        getBoardList(state, action: PayloadAction<Board>) {

        }
    }
});

export default board.reducer;