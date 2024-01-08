"use client"
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";
import Login from "../../assets/loginImage.png"
import Image from "next/image";

type FormValues = {
  id: string,
  password: string
}


const login = () => {


  const onSubmit:SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }



  return (
    <div>
      <Row>

        <Col  sm={12} md={16} lg={16} >
          <Image src={Login} width={500}  alt="login image" ></Image>
        </Col>


        <Col  sm={12} md={8} lg={8} >
          <h1>Frist your login account</h1>

           <Form submitHandler={onSubmit}> 

              <div>
                 <FormInput name="id" type="text" size="large" label="id" />
                 <FormInput name="password" type="password" size="large" label="password" />
              </div>

              <Button type="primary" htmlType="submit" >login</Button>
           </Form>

        </Col>

        
      </Row>
    </div>
  );
};

export default login;
