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
