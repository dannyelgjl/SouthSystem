import React, { useState, useCallback, createContext, useContext } from 'react';
//Interfaces
import { IBookVolumeInfo } from '../interfaces/interface';

interface BookContext {
  book?: IBookVolumeInfo;
  setBookModal(book: IBookVolumeInfo): void;
}

const BookContextData = createContext<BookContext>({} as BookContext);

const BookProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IBookVolumeInfo>();

  const setBookModal = useCallback((book: IBookVolumeInfo) => {
    setData(book);
  }, []);

  return (
    <BookContextData.Provider
      value={{
        book: data,
        setBookModal,
      }}>
      {children}
    </BookContextData.Provider>
  )
}

export function useBookModal(): BookContext {
  const context = useContext(BookContextData);

  return context;
}

export { BookProvider }