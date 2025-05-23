// import styles from "./Login.module.scss";
// import React from "react";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { Button, Input, Space } from "antd";

// export default function Login() {
//   return (
//     <div className={styles.wrapper}>
      
//         <div className={styles.item}>
//             <span>Login:</span>
//           <Input placeholder="Input Username" />
//         </div>
//         <div className={styles.item}>
//           {" "}
//           <span>Password:</span>
//           <Input.Password
//             placeholder="input password"
//             iconRender={(visible) =>
//               visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//             }
//           />
//         </div>
      
//     </div>
//   );
// }
import styles from "./Login.module.scss";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <span>Login:</span>
        <Input placeholder="Input Username" />
      </div>
      <div className={styles.item}>
        <span>Password:</span>
        <Input.Password
          placeholder="Input Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      <div className={styles.actions}>
        <Button type="primary" block>
          Log In
        </Button>
        <div className={styles.signup}>
          <span>First time here?</span>{" "}
          <Link to="/Regestration">
            <Button type="link">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
