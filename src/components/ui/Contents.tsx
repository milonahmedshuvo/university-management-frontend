"use client"

import React from "react"
import { Layout } from "antd";
import UMBreadcrumb from "./UMBreadcrumb";
const { Content } = Layout 



const Contents = ( {children} : {children:React.ReactNode} ) => {

const base = "admin"

  return (
     <Content style={{ minHeight:"100vh"}} > 
     
     <UMBreadcrumb 
       items={[
        {
          label: `${base}`,
          link: `/${base}`
        },
        {
          label: "student",
          link : `/${base}/student`
        }
       ]}
      />

      {children}    
       </Content>
  )
}

export default Contents;
