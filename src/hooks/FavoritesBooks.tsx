import React, { useState, useCallback, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
//Interfaces
import { IBookVolumeInfo } from '../interfaces/interface';

interface FavoriteContext {
  book: IBookVolumeInfo[];
  setFavorites(book: IBookVolumeInfo): void;
  removeFavorites(bookId: string): void;
}

const FavoritesContextData = createContext<FavoriteContext>({} as FavoriteContext);

export const FavoritesBooksProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IBookVolumeInfo[]>([]);

  const setFavorites = useCallback((book: IBookVolumeInfo) => {
    const find = data.find(bookData => book.id === bookData.id);

    if (find) {
      toast.error('Não é possível adicionar o mesmo Livro aos favoritos 😲🤯😥');

      return;
    };

    toast.success(`Livro ${book.volumeInfo.title} favoritado com sucesso 😍🤩🥰🚀🐱‍🏍🔥`);
    setData([book, ...data]);
  }, [data]);

  const removeFavorites = useCallback((bookId: string) => {
    const bookRemoved = data.filter(book => book.id !== bookId);

    if (!bookRemoved) {
      toast.error('teste');

      return;
    }

    setData(bookRemoved);
  }, [data]);

  return (
    <FavoritesContextData.Provider
      value={{
        book: data,
        setFavorites,
        removeFavorites,
      }}>
      {children}
    </FavoritesContextData.Provider>
  )
}

export function useFavoriteBook(): FavoriteContext {
  const context = useContext(FavoritesContextData);

  return context;
}
