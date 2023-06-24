import { useAddAlbumsMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListsItem from "./AlbumListsItem";

function AlbumLists({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user); // data is fetched when called this hook
  // isLoading is for FIRST time only
  // cmp to  isFetching is for every time
  //, refetch

  const [addAlbums, addAlbumsResult] = useAddAlbumsMutation();
  //function to run , obj. {isError,isloading ...}

  const handleAddAlbum = () => {
    addAlbums(user);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>error occured </div>;
  } else {
    content = data.map((album) => {
      return <AlbumListsItem album={album} />;
    });
  }

  //   console.log(data, error, isLoading);

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-xl font-bold ">Album of {user.name}</h3>
        <Button loading={addAlbumsResult.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>

      <div>{content}</div>
    </div>
  );
}

export default AlbumLists;
