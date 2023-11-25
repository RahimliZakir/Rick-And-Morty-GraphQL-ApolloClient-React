import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";
import SearchLocations from "./components/SearchLocations";

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
    {
      path: "locations",
      element: <SearchLocations />,
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        {/* React Router DOM v.6.4 */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
