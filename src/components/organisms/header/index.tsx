import Head from "next/head";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}
const header = ({ title, description }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/icons/favicon.jpg" />
    </Head>
  );
};

export default header;
