export interface IBookVolumeInfo {
  id: string;
  volumeInfo: IImageLinks;
}

interface IImageLinks {
  title: string;
  description?: string;
  publisher?: string;
  pageCount?: string;
  language?: string;
  imageLinks: {
    thumbnail: string;
  }
  authors: [];
}


export interface IRepository {
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}