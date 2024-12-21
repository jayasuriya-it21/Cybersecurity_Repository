import React, { useEffect } from "react";

const CourseRedirect = ({ user }) => {
  useEffect(() => {
    if (user) {
      window.open("http://localhost:3000/courses/basic", "_blank");
    }
  }, [user]); // Add the dependency array herec to avoid syntax errors

  return null; // This component doesn't render anything
};

export default CourseRedirect;
