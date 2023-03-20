import "./Header.css";

interface Props {
  darkModeEnabled: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkModeEnabled, toggleDarkMode }: Props) => {
  return (
    <div className={`Header ${darkModeEnabled ? "dark" : "light"}Mode`}>
      <h1>HANS SLOG</h1>
      <button onClick={toggleDarkMode}>
        switch to {darkModeEnabled ? "light" : "dark"} mode
      </button>
    </div>
  );
};

export default Header;
