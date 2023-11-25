import React from "react";

import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { useGraphQL } from "../hooks/useGraphQL";

import LoadingErrorWrapper from "./shared/LoadingErrorWrapper";

const CharactersList = () => {
  const graphQl = useGraphQL();

  const { data, loading, error } = useQuery(graphQl.GET_CHARACTERS);

  return (
    <LoadingErrorWrapper loading={loading} error={error}>
      <div className="row">
        <h1 className="text-center my-4">Rick and Morty GraphQL</h1>
        {data?.characters?.results?.map((item) => {
          return (
            <div className="col-4 mb-4" key={item.id}>
              <div className="card">
                <img className="card-img-top" src={item.image} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <Link to={`/details/${item.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </LoadingErrorWrapper>
  );
};

export default CharactersList;
