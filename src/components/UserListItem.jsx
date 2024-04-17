export default function UserListItem({ user }) {
  return (
    <div className="flex flex-col gap-2 shadow rounded-lg p-4 bg-secondary text-text flex-grow">
      <span className="font-bold">{user.name}</span>
      <span>{user.email}</span>
      <span>{user.title}</span>
      <div className="flex gap-4 items-center">
        <span className={`px-1 rounded-lg status-${user.status.toLowerCase()}`}>
          {user.status}
        </span>
        <a href="#" className="text-primary hover:underline">
          Edit
        </a>
      </div>
    </div>
  );
}
