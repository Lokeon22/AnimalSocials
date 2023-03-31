import { useUser } from "../../context/auth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useUser();

  return user ? <>{children}</> : <Navigate to="/login" />;
}
