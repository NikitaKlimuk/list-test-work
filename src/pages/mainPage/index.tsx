import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../api/getUsers";
import { getAllUsersAction } from "../../redux/actions";
import { RootState } from "../../redux/store";

interface IProps {}

export const MainPage: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const selectUsers = (state: RootState) => state.users;
  const users = useSelector(selectUsers);
  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        dispatch(getAllUsersAction(response.data));
      } catch (error) {
        // Обработка ошибки, если необходимо
      }
    };

    fetchUsers();
  }, [dispatch]);

  return <section className="mainPage"></section>;
};
