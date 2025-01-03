import { useState, ReactNode, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// hooks
import useAuth from '../hooks/useAuth';
// components
import LoadingScreen from '../components/LoadingScreen';
import { redirect } from 'next/navigation';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const { isAuthenticated, isInitialized } = useAuth();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      push(requestedLocation);
    }
  }, [pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    // redirect to login
    return redirect('/auth/login');
  }

  return <>{children}</>;
}
