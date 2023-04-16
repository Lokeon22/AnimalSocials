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

export interface UserDetails {
  id: number;
  name: string;
  email: string;
  avatar: string;
  created_at: string;
}

export interface PostsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  user_id: number;
  created_at: string;
  comments: Comments[];
}

interface Comments {
  id: number;
  comment: string;
  post_id: number;
  user_id: number;
  create_at: string;
}

export interface UserInfoProps {
  id: number;
  is_authenticated: boolean;
  is_online: boolean;
  last_message: [];
  secret: string;
  username: string;
  avatar: null;
}
