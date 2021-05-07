import React from 'react'
import { PageHeader } from 'antd';

export default function Header(props) {
  return (
    <div onClick={()=>{
      window.open("https://github.com/austintgriffith/scaffold-eth");
    }}>
      <PageHeader
        title="🗳️ It's time to vote fellas ! MOC BLOCKCHAIN PROJECT"
        subTitle="Personal token web2 voting system, with signed messages"
        style={{cursor:'pointer'}}
      />
    </div>
  );
}
