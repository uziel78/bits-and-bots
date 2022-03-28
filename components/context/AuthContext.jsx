// ========== AuthContext used to share props across non-children components
// (wrapped around _app.jsx children) in this case to cover both the Nav component and Login page =========

import React, { useState } from "react";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
