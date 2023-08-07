import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import closeIcon from "../../assets/icons/closeIcon.svg";
import "./styles.scss";

interface IProps {
  setIsModal: (isModal: boolean) => void;
}

export const ListItemModal: React.FC<IProps> = ({ setIsModal }) => {
  const selectedUser = (state: RootState) => state.selectedUser;
  const user = useSelector(selectedUser);

  return (
    <section className="listItemModal" onClick={() => setIsModal(false)}>
      <div
        className="listItemModal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="listItemModal__content-title">
          External Client Info
          <img
            src={closeIcon}
            alt="close modal icon"
            onClick={() => setIsModal(false)}
          />
        </div>
        <div className="listItemModal__content-address">
          Address: {user?.address?.street}, {user?.address?.suite},{" "}
          {user?.address?.city}, {user?.address?.zipcode}
        </div>
        <div className="listItemModal__content-company">
          Company: {user?.company?.name}, {user?.company?.bs}
        </div>
      </div>
    </section>
  );
};
