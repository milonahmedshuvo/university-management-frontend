import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/SlideBar";
import { Layout } from "antd";


const DashbordLayout = ( {children} : {children: React.ReactNode} ) => {
 
  return (
    <Layout hasSider>
        <SideBar/>
        <Contents> 
     {children}
     </Contents>
      </Layout>
  );
};

export default DashbordLayout;