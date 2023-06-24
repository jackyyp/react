import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest //rest are possible event handler or className
}) {
  const classes = classNames(
    rest.className, //merging (two same className variable got overwritten)
    "flex items-center px-7 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,

      "rounded-full": rounded,
      "bg-white text-black": outline, // later one take priority

      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

//enforce checking with propTypes
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error("you can only choose one of such props");
    }
  },
};

export default Button;
