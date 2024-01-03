"use client";
import { USER_ROLE } from '@/contents/role';
import sliderItems from '@/contents/sliderItems';
import {  Menu } from 'antd';
import { Layout } from "antd";
import { useState } from "react";

const { Sider } = Layout;









const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.ADMIN


  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        position: "sticky",
        overflow: "auto",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0
      }}
    >


      <div style={{ 
        color: "white",
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "1rem",
        fontWeight: "bold"
        }}>
         ph-university
      </div>

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sliderItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
