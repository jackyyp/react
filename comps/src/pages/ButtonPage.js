import Button from "../components/Button";
import {
  GoBell,
  GoBookmark,
  GoMail,
  GoThumbsup,
  GoSmiley,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick} className="mb-5">
          <GoBell className="mr-1" />
          Click Me
        </Button>
      </div>

      <div>
        <Button secondary outline onMouseEnter={handleClick}>
          <GoBookmark />
          testing2
        </Button>
      </div>

      <div>
        <Button warning rounded>
          <GoMail />
          See Deals!
        </Button>
      </div>

      <div>
        <Button>
          <GoThumbsup />
          lmao
        </Button>
      </div>

      <div>
        <Button>
          <GoSmiley />
          hey
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
