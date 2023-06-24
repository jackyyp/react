//styling use only

import classNames from "classnames";

//rest represent all other event handler that we may pass to
function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  //rest= event handler
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
