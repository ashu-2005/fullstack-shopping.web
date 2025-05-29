
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

// Mock authentication - in real app this would come from auth context
const isAuthenticated = () => {
  // Check if user is logged in (you can implement this based on your auth system)
  return localStorage.getItem('user') !== null;
};

const isAdmin = () => {
  // Check if user is admin (you can implement this based on your auth system)
  const user = localStorage.getItem('user');
  return user && JSON.parse(user).role === 'admin';
};

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
