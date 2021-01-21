import React, { useState, useCallback, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
//Interfaces
import { IBookVolumeInfo } from '../interfaces/interface';

interface FavoriteContext {
  book: IBookVolumeInfo[];
  setFavorites(book: IBookVolumeInfo): void;
  removeFavorites(book: IBookVolumeInfo): void;
  showRemoveFavorites(book: IBookVolumeInfo): boolean;
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

  const removeFavorites = useCallback((book: IBookVolumeInfo) => {
    const bookRemoved = data.filter(bookData => bookData !== book);

    toast.error(`Você removeu o livro ${book.volumeInfo.title} dos seus favoritos`);

    setData(bookRemoved);
  }, [data]);

  const showRemoveFavorites = useCallback((book: IBookVolumeInfo) => {
    const contains = data.includes(book);

    return contains;
  }, [data]);


  return (
    <FavoritesContextData.Provider
      value={{
        book: data,
        setFavorites,
        removeFavorites,
        showRemoveFavorites,
      }}>
      {children}
    </FavoritesContextData.Provider>
  )
}

export function useFavoriteBook(): FavoriteContext {
  const context = useContext(FavoritesContextData);

  return context;
}
