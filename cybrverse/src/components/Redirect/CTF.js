import React, { useEffect } from "react";

const CTF = ({ user }) => {
  useEffect(() => {
    if (user) {
      window.open("https://app.hackthebox.com/", "_blank");
    }
  }, [user]); // Add the dependency array here to avoid syntax errors

  return null; // This component doesn't render anything
};

export default CTF;
