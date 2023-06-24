// Theory:
// user type in address:
// -   send back the HTML File (react already done this)

// -   should look at address bar and decide what to SharedWorker
//      Using window.location.path

// clicking link / back button:

// - stop default page-switching behaviour(dumping page js file)
//   We dont have to do it(its not occuring since we using pushState() and browHist is a stack)

// - see where user Go (back or forward)
//   Use 'popstate' emitted by pushState()
//   window.addEventListener('popstate',()=>console.log(window.location.pathname))

// - update the screen

// - update address bar
//   window.history.pushState({},'',/dropdown);  (update address but doesnt refresh)

import { createContext, useState, useEffect } from "react";
const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    const cleanUp = () => {
      window.removeEventListener("popstate", handler);
    };

    return cleanUp;
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
