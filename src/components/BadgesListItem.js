import React from "react";

function BadgeListItem(props) {
  return (
    <div className="BadgesList__item-section">
      <img
        className="BadgesList__item-avatar"
        src={props.badge.avatarUrl}
        alt="Avatar"
      />
      <p>
        <b>{props.badge.firstName} {props.badge.lastName} </b><br />
        @{props.badge.twitter} <br />
        {props.badge.jobTitle}
      </p>
    </div>
  );
}

export default BadgeListItem;
