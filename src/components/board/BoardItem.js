import React from "react";

const BoardItem = (props) => {
  return (
    <tr>
      <td className="text-center">{props.number}</td>
      <td className="text-center">{props.boardinfo.Title}</td>
      <td className="text-center">{props.boardinfo.Name}</td>
      <td className="text-center">{props.boardinfo.ReplyCount}</td>
      <td className="text-center">{props.boardinfo.RecommandCount}</td>
    </tr>
  );
};
export default BoardItem;
