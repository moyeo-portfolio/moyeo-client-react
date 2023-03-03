import React from "react";
import { IDevelopersProps } from "interface/Developers";

export default function DeveloperDetail({
  data,
}: IDevelopersProps): JSX.Element {
  return (
    <div className="flex">
      <div className="developer-detail-left-box">
        <div className="developer-detail-left-frame">
          <img className="developer-detail-left-img" src={data.img} />
        </div>
      </div>
      <div>
        <div>{data.name}</div>
        <div>{data.nickname}</div>
        <div>{data.phone}</div>
        <div>{data.email}</div>
        <div>{data.github}</div>
        <div>{data.blog}</div>
      </div>
    </div>
  );
}
