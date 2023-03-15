import "./UserModal.css";

const UserModal = ({ userInfo, onCloseModal }) => {
  const infoContainer = Object.entries(userInfo);

  const renderedArr = infoContainer.map(([key, value]) => {
    return <div>{key + ":" + value}</div>;
  });

  return (
    <div className="modal" onClick={onCloseModal}>
      <div className="modal__body">{renderedArr}</div>
    </div>
  );
};

export default UserModal;
