import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const useAuth = () => {
  const { user, isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );
  return { user, isAuthenticated, loading };
};

export default useAuth;