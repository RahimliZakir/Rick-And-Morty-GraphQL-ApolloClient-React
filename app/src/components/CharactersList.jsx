import React, { Fragment } from "react";

import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  return (
    <Fragment>
      <h1 className="text-center mb-4">Rick and Morty GraphQL</h1>
      {data?.characters?.results?.map((item) => {
        return (
          <div className="col-4 mb-4" key={item.id}>
            <div className="card">
              <img className="card-img-top" src={item.image} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CharactersList;
