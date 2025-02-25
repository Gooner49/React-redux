import * as types from "./types";

export function addBook(value) {
  console.log ("addbook");
  return {
    type: types.ADD_BOOK,
    payload: value
  }
}

export function deleteBook(value) {
  return {
    type: types.DELETE_BOOK,
    payload: 1
  }
}