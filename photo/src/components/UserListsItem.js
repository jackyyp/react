import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { deleteUsers } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumLists from "./AlbumLists";

function UserListsItems({ user }) {
  const [doDeleteUsers, isDeletingUsers, deleteUsersError] =
    useThunk(deleteUsers);

  const handleClick = () => {
    doDeleteUsers(user); // pass in for user.id
  };

  const header = (
    <>
      <Button onClick={handleClick} loading={isDeletingUsers} className="mr-3">
        <GoTrashcan />
      </Button>
      {deleteUsersError && <div>Error occured when del users</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumLists user={user} />
    </ExpandablePanel>
  );
}

export default UserListsItems;
