import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumsMutation } from "../store";

function AlbumListsItem({ album }) {
  const [removeAlbums, results] = useRemoveAlbumsMutation();

  const handleRemoveAlbum = () => {
    removeAlbums(album);
  };

  const header = (
    <div className="flex flex-row items-center justifty-between">
      <Button
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
        className="mr-2"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel header={header} key={album.id}>
      List of photos
    </ExpandablePanel>
  );
}

export default AlbumListsItem;
