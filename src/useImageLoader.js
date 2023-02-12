import { useEffect, useState } from "react";

const useImageLoader = (imageList) => {
    const [loaded] = useState(false);
    const loadedList = [];

    const setLoaded = (value) => {
      loadedList.push(value);
    }

    useEffect(()=> {

    },[loaded])
  

  
    return [loaded, setLoaded];
  };
  
  export default useImageLoader;
