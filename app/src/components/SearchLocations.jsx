import React, { useState } from "react";

import { useLazyQuery } from "@apollo/client";

import { useGraphQL } from "../hooks/useGraphQL";

import LoadingErrorWrapper from "./shared/LoadingErrorWrapper";

const SearchLocations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const graphQl = useGraphQL();

  const [getLocations, { data, loading, error }] = useLazyQuery(
    graphQl.SEARCH_LOCATIONS
  );

  const handleSearch = () => {
    getLocations({
      variables: {
        name: searchTerm,
      },
    });
  };

  return (
    <LoadingErrorWrapper loading={loading} error={error}>
      <div className="row justify-content-center mt-3">
        <div className="col-8">
          <div className="d-flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
            <button onClick={handleSearch} className="btn btn-info">
              Search
            </button>
          </div>
          <div>
            {data?.locations?.results.map((item) => {
              return <p key={item.id}>{item.name}</p>;
            })}
          </div>
        </div>
      </div>
    </LoadingErrorWrapper>
  );
};

export default SearchLocations;
