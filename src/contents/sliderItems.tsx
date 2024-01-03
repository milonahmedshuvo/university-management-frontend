
import {
    UserOutlined,
  } from '@ant-design/icons';




const sliderItems = ( role: string ) => {

   const DefaultSliderItems = [{
        label:"profile",
        key: "profile",
        icon: <UserOutlined></UserOutlined>,
        children: [
            {
                label: "Account Profile",
                key: "profile"
            },
            {
                label : "Change Password",
                key: "Change bpassword"
            }
        ]
        
      
   }]


   const commonAdminSliderItems = [
    {
        label: "Manage Student",
        key : "manage student"
    }
   ]



   if(role === "student") return DefaultSliderItems;
   else if (role === "admin") return commonAdminSliderItems;


}

export default sliderItems
