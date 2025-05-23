// import React from 'react';

// const Login = () => {
//   return <h1>📅 Login page</h1>;
// };

// export default Login;
import styles from "./Login.module.scss";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      
        <div className={styles.item}>
            <span>Login:</span>
          <Input placeholder="Input Username" />
        </div>
        <div className={styles.item}>
          {" "}
          <span>Password:</span>
          <Input.Password
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
      
    </div>
  );
}