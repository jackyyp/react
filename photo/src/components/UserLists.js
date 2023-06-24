import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUsers } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import UserListsItems from "./UserListsItem";

function UserLists() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doAddUsers, isAddingUsers, addingUsersError] = useThunk(addUsers);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doAddUsers();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error occured</div>;
  } else {
    content = data.map((user) => {
      return <UserListsItems key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isAddingUsers} onClick={handleUserAdd}>
          + Add Users
        </Button>

        {addingUsersError && "error creating users"}
      </div>
      {content}
    </div>
  );
}

export default UserLists;
