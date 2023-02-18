import React, { useState, useEffect, useContext } from "react";

const useReadyToRender = (contextValues) => {
  // const cooo = useContext(AppContext);
  const { imagesLoaded, fontLoaded, data, user } = contextValues;
  const [allFetched, setAllFetched] = useState(false);

  useEffect(() => {
    console.log(contextValues);
    if (imagesLoaded.state && fontLoaded.state && data && user.state.InviteId)
      setAllFetched(true);
  }, [contextValues]);

  return allFetched;
};

export default useReadyToRender;
