import UserListItem from "./UserListItem";

export default function UserList({ users }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {users.map((user) => (
        <UserListItem user={user} key={user.id} />
      ))}
    </div>
  );
}
