import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";

const App = () => {
  //* React Router DOM v.6.4
  const router = createBrowserRouter([
    {
      index: true,
      element: <CharactersList />,
    },
    {
      path: "details/:id",
      element: <CharacterDetails />,
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {/* React Router DOM v.6.4 */}
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
};

export default App;
