import { Spinner } from "@nextui-org/react";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center mt-60">
      <Spinner color="primary" labelColor="primary" />
    </div>
  );
};

export default loading;
