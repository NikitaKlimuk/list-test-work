import { useDispatch } from "react-redux";
import { getUserByIdAction } from "../../redux/actions";
import { getUserById } from "../../api/getUser";
import { highlightMatches } from "../../utils/highlightMatches";
import "./styles.scss";

interface IProps {
  id: number;
  name: string;
  username: string;
  email: string;
  onDelete: (id: number) => void;
  setIsModal: (isModal: boolean) => void;
  query: string;
}

export const ListItem: React.FC<IProps> = ({
  name,
  username,
  email,
  id,
  onDelete,
  setIsModal,
  query,
}) => {
  const dispatch = useDispatch();

  const handleListItemClick = async () => {
    try {
      const response = await getUserById(id);
      dispatch(getUserByIdAction(response.data));
      setIsModal(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onDelete(id);
  };

  return (
    <section className="listItem" onClick={handleListItemClick}>
      <div className="listItem__info">
        <div className="listItem__info-name">
          Name: {highlightMatches(name, query)}
        </div>
        <div className="listItem__info-username">
          Username: {highlightMatches(username, query)}
        </div>
        <div className="listItem__info-email">
          Email: {highlightMatches(email, query)}
        </div>
      </div>
      <div className="listItem__action">
        <button onClick={handleDeleteClick}>Remove Item</button>
      </div>
    </section>
  );
};
