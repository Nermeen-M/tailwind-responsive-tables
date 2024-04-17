import UserItem from "./UserItem";

export default function UserTable({ users }) {
  return (
    <div className="overflow-x-auto shadow rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-primary text-white text-left">
            <th className="w-3/12 p-3">Name</th>
            <th className="w-4/12 p-3">Email</th>
            <th className="w-3/12 p-3">Title</th>
            <th className="w-1/12 p-3">Status</th>
            <th className="w-1/12 p-3"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
