import React from "react";
import { Link } from "react-router-dom";

const BoardItem = (props) => {
  return (
    <tr>
      <td className="text-center">{props.number}</td>
      <td className="text-center">
        <Link to="#">{props.boardinfo.Title}</Link>
      </td>
      <td className="text-center">{props.boardinfo.Name}</td>
      <td className="text-center">{props.boardinfo.ReplyCount}</td>
      <td className="text-center">{props.boardinfo.RecommandCount}</td>
    </tr>
  );
};
export default BoardItem;
