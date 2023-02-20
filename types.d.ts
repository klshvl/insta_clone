interface AddCommentsState {
  id: string;
  content: string;
  commentLiked: boolean;
}

interface Post {
  id: string;
  userId: number;
  image: string | undefined;
  username: string;
  likedBy: number[];
  comments: AddCommentsState[];
}

interface ContextProps {
  children: React.ReactNode | React.ReactNode[];
}
