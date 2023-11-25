import React from "react";

import Spinner from "./Spinner";
import Alert from "./Alert";

const LoadingErrorWrapper = ({ loading, error, children }) => {
  if (loading) return <Spinner />;

  if (error) return <Alert />;

  return children;
};

export default LoadingErrorWrapper;
