import users from "./data/users.json";
import UserTable from "./components/UserTable";
import UserList from "./components/UserList";
import ThemeToggler from "./components/ThemeToggler";

export default function App() {
  return (
    <div className="w-full h-full min-h-screen p-6 bg-background">
      <ThemeToggler />

      <h1 className="text-xl font-bold uppercase text-center text-text m-8">
        Users
      </h1>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">Using table</h2>
        <UserTable users={users} />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">Using div</h2>
        <UserList users={users} />
      </div>
    </div>
  );
}
