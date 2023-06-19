import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "90vh" }}>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Bikebook : Hire a roadbike",
  description: "Mern stack project",
  keywords: "MERN : MongoDB,ExpressJS,React,NodeJS",
  author: "Aashish  Panthee",
};

export default Layout;
