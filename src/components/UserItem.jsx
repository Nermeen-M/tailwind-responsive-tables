export default function UserItem({ user }) {
  return (
    <tr className="text-text bg-secondary">
      <td className="p-3">{user.name}</td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.title}</td>
      <td className="p-3">
        <span className={`px-1 rounded-lg status-${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </td>
      <td className="p-3">
        <a href="#" className="text-primary hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
}
