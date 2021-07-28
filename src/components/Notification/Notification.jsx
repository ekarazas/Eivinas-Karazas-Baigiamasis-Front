import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.style";

const Notification = ({ type, children, unset }) => {
  return (
    <>
      <S.StyledNotification type={type}>
        {children}
        <S.CloseButton onClick={unset} type="button">
          x
        </S.CloseButton>
      </S.StyledNotification>
    </>
  );
};

Notification.proptTypes = {
  type: PropTypes.oneOf(["success", "danger"]),
  children: PropTypes.string.required,
};

Notification.defaultProps = {
  type: "success",
};

export default Notification;
