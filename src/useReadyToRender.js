import React, { useState, useEffect, useContext } from "react";

const useReadyToRender = (contextValues) => {
  // const cooo = useContext(AppContext);
  const { imagesLoaded, fontLoaded, data, user } = contextValues;
  const [allFetched, setAllFetched] = useState(false);

  useEffect(() => {
    if (
      imagesLoaded.state &&
      fontLoaded.state &&
      // data.state &&
      user.state.InviteId
    )
      setAllFetched(true);
  }, [contextValues]);

  useEffect(() => {
    // console.log(allFetched);
  }, [allFetched]);

  return allFetched;
};

export default useReadyToRender;
