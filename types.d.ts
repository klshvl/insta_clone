interface AddCommentsState {
  id: number;
  addComment: string | undefined;
  isLiked: boolean;
}

interface Post {
  id: number;
  image: ImageSourcePropType;
  username: string;
  likedBy: number[];
  // comments: Array<string | undefined>;
  comments: AddCommentsState[];
}

interface ContextProps {
  children: React.ReactNode | React.ReactNode[];
}
