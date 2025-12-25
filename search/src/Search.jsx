import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useMemo } from "react";

export default function Search() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const debounceValue = useDebounce(searchInput);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  console.log(users);
  console.log(searchInput);

  const filteredAndSorted = useMemo(() => {
    const filtereUser = users.filter((user) =>
      user.firstName.toLowerCase().includes(debounceValue.toLowerCase())
    );
    return filtereUser.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });
  }, [users, debounceValue, sortOrder]);

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="search"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search..."
      />

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort A–Z</option>
        <option value="desc">Sort Z–A</option>
      </select>
      <ul>
        {filteredAndSorted.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
