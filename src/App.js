import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utilities/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  },

  ]);


  return (
    <div className="">
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
