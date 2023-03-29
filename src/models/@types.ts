export interface UserProps {
  user: {
    id?: number;
    name: string;
    email: string;
    password: string;
    old_password: string;
    avatar: string | undefined;
    created_at?: string;
    is_admin?: number;
  };
  token: string;
}

export interface PostsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  user_id: number;
  created_at: string;
  comments: [];
}
