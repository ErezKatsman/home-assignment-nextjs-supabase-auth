import React from "react";
import Image from "next/image";
import Logo from "../../components/logo.svg";

const VerificationPage = () => {
  return (
    <main>
      <div className="card bg-base-100 w-96 shadow-xl">
        <Image
          className="self-center"
          src={Logo}
          alt="Smart Storytime"
          width={260}
          quality={100}
        />
        <h1>thank you for signIn</h1>
        <p className="p-5">
          You got mail verification, please open the mail sent and enter the
          link sent
        </p>
      </div>
    </main>
  );
};

export default VerificationPage;
