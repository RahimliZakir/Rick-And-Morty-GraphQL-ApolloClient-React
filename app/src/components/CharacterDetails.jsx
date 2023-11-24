import React from "react";

import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const params = useParams();
  console.log(params.id);

  return <div>CharacterDetails</div>;
};

export default CharacterDetails;
