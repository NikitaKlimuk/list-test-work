import { useState } from "react";
import "./styles.scss";

interface IProps {
  onSearch: (query: string) => void;
}

export const UsersFilter: React.FC<IProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    onSearch(value);
  };

  const handleResetClick = () => {
    setQuery("");
    onSearch("");
    window.location.reload();
  };

  return (
    <section className="usersFilter">
      <h2>Find your user</h2>

      <div className="usersFilter__controls">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search by name, username, or email"
        />
        <button onClick={handleResetClick}>Reset Filters</button>
      </div>
    </section>
  );
};
