import { useEffect, useState } from "react";

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
    <div>
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
      <div className="font-bold bg-text">
        <h1>Hello!</h1>
      </div>
    </div>
  );
}
