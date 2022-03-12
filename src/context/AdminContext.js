import { useState } from "react";
import adminContext from "./use-context";

const adminValues = {
  isDark: false,
};
const AdminContext = ({ children }) => {
  const [value, setValue] = useState(adminValues);
  return (
    <adminContext.Provider value={[value, setValue]}>
      {children}
    </adminContext.Provider>
  );
};

export default AdminContext;
