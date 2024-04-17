import { useEffect, useState } from "react";

import users from "./data/users.json";
import UserTable from "./components/UserTable";
import UserList from "./components/UserList";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    {
      isDarkTheme
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <div className="w-full h-full min-h-screen p-6 bg-background">
      <div>
        <button
          onClick={() => {
            setIsDarkTheme(true);
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setIsDarkTheme(false);
          }}
        >
          Light
        </button>
      </div>
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
