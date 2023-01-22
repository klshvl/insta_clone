interface Post {
  id: number;
  image: ImageSourcePropType;
  username: string;
  likedBy: number[];
  comments: Array<string | undefined>;
}

interface ContextProps {
  children: React.ReactNode | React.ReactNode[];
}
