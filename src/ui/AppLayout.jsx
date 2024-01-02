import Header from './Header.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader.jsx';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="bg-blue-100 bg-auto min-h-screen text-black">
      <Header />

      <main className="max-w-6xl mx-auto p-5">
        {isLoading ? <Loader /> : <Outlet />}
      </main>
    </div>
  );
};

export default AppLayout;
