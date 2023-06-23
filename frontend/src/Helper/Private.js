import React, { useEffect, useState } from "react";
// import axios from "axios";
import Http from "./Http";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrivateSpinner from "./PrivateSpinner";
const Private = ({ children }) => {
  const { userToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await Http.get(
          "/api/v1/auth/admin-auth"
          //  {
          // headers: {
          //   Authorization: `Bearer ${userToken}`,
          //   "Cache-Control": "no-cache",
          //   "If-None-Match": "<ETAG_VALUE>",
          // yo duiota line chahi , narakhni, vani  server ley cached resources jo pathaidinxa.
          // This ensures that the server instructs the client and intermediate caching servers not to cache the resource and provides a mechanism (ETag) for validating the freshness of the resource.
          // },
          // }
        );
        if (!res.data.ok) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setOk(true);
        }
      } catch (error) {}
    };
    if (userToken) authCheck();
  }, [userToken]);
  return ok ? <>{children}</> : <PrivateSpinner />;
};

export default Private;
