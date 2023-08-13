import { RouterProvider } from 'react-router-dom';
import SuspenseLoading from '../common/SuspenseLoading';
import routes from '../core/Routes';

function Router() {
  return (
    <RouterProvider router={routes} fallbackElement={<SuspenseLoading />} />
  );
}

export default Router;
