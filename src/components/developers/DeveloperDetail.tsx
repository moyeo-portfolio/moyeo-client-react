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
      <div className="developer-detail-right-box">
        <div className="developer-detail-right-box-in">
          <div><span>이름: </span>{data.name}</div>
          <div><span>닉네임: </span>{data.nickname}</div>
          <div><span>전화번호: </span>{data.phone}</div>
          <div><span>이메일: </span>{data.email}</div>
          <div><span>깃허브: </span>{data.github}</div>
          <div><span>블로그: </span>{data.blog}</div>
        </div>
      </div>
    </div>
  );
}
