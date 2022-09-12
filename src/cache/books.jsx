import { createContext } from "react";

const BooksContext = createContext([]);

import { useEffect, useReducer, useContext, createContext } from "react";

const refreshActionType = "booksRefreshed";
const refreshAction = (dispatch) =>
  fetch("/api/books")
    .then((response) => response.json())
    .then((payload) => dispatch({ type: refreshActionType, payload }));

export default ({ children }) => {
  const [books, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case refreshActionType:
        return action.payload;

      default:
        return state;
    }
  }, []);

  // Loads the books on the mounting the component.
  useEffect(() => void refreshAction(dispatch), []);

  return (
    <BooksContext.Provider value={[books, dispatch]}>
      {children}
    </BooksContext.Provider>
  );
};



