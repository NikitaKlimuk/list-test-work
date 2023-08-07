import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getUsers";
import { getAllUsersAction } from "../../redux/actions";
import { ListItem } from "../../components/ListItem";
import { ListItemModal } from "../../components/ListItemModal";
import { UsersFilter } from "../../components/UsersFilter";
import "./styles.scss";

interface IProps {}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const MainPage: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const [listUsers, setListUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const handleDeleteItem = (id: number) => {
    setListUsers((prevList) => prevList.filter((user) => user.id !== id));
    setFilteredUsers((prevList) => prevList.filter((user) => user.id !== id));
  };

  const handleSearch = (query: string) => {
    setQuery(query);

    const filteredList = listUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filteredList);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        dispatch(getAllUsersAction(response.data));
        setListUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {}
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <section className="mainPage">
      <h1 className="mainPage__title">Technical task for Firebirdtours</h1>
      <div className="mainPage__filter">
        <h2 className="mainPage__filter-title">Users Filter</h2>
        <UsersFilter onSearch={handleSearch} />
      </div>
      <div className="mainPage__list">
        <h2 className="mainPage__list-title">Users List</h2>
        <div className="mainPage__list-items">
          {filteredUsers?.map((user) => (
            <ListItem
              key={user.id}
              {...user}
              onDelete={handleDeleteItem}
              setIsModal={setIsModal}
              query={query}
            />
          ))}
        </div>
      </div>
      <div className="mainPage__modal">
        {isModal && <ListItemModal setIsModal={setIsModal} />}
      </div>
      <footer>
        <h3>Made by Mikita Klimuk</h3>
      </footer>
    </section>
  );
};
