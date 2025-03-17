// codigo 2 - types/blog.ts
export type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  content: React.ReactNode; // Ahora acepta JSX
  extendedContent?: React.ReactNode; // Ahora acepta JSX
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  views: number;
  comments: number;
};
