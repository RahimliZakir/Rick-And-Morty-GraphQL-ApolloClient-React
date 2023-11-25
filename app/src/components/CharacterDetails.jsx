import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { useGraphQL } from "../hooks/useGraphQL";

import LoadingErrorWrapper from "./core/LoadingErrorWrapper";

const CharacterDetails = () => {
  const params = useParams();

  const graphQl = useGraphQL();

  const { data, loading, error } = useQuery(graphQl.GET_CHARACTER_DETAILS, {
    variables: {
      id: params.id,
    },
  });

  return (
    <LoadingErrorWrapper loading={loading} error={error}>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div>
          <img src={data?.character?.image} alt="Character" />
        </div>
        <div>
          <h3>{data?.character?.name}</h3>
          {data?.character?.episode.slice(0, 10).map((item) => {
            return (
              <p key={item.id}>
                {item.name} - <b>{item.episode}</b>
              </p>
            );
          })}
        </div>
      </div>
    </LoadingErrorWrapper>
  );
};

export default CharacterDetails;
