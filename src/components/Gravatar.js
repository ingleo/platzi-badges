import React from "react";

import { getGravatarUrl } from "../utils/gravatarUrl";

function Gravatar(props) {
  const gravatarUrl = getGravatarUrl(props.email);
  return <img className={props.className} src={gravatarUrl} alt="Avatar" />;
}

export default Gravatar;
