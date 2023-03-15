import "./UserCard.css";
import React, { useState } from "react";
import UserModal from "./UserModal";

const UserCard = ({ userInfo }) => {
  const [modalToggler, setModalToggler] = useState(false);
  const modalTogglerOpenHandler = () => {
    setModalToggler(true);
  };
  const modalTogglerCloseHandler = (e) => {
    setModalToggler(false);
    e.stopPropagation();
  };

  return (
    <div className="user-card" onClick={modalTogglerOpenHandler}>
      <img
        src={userInfo.picture}
        alt={userInfo.name}
        className="user-card__img"
      />
      <div className="user-card__name">{userInfo.name}</div>
      <div className="user-card__age">{userInfo.age}</div>
      <div className="user-card__gender">{userInfo.gender}</div>
      <div className="user-card__balance">{userInfo.balance}</div>
      {modalToggler ? (
        <UserModal
          userInfo={userInfo}
          onCloseModal={modalTogglerCloseHandler}
        />
      ) : null}
    </div>
  );
};

export default UserCard;
