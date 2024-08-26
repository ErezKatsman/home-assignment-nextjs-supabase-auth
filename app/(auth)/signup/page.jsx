import FormCard from "../../components/FormCard";
import React from "react";
import { signup } from "../auth-actions";

export default function Signup() {
  return (
    <main>
      <FormCard method={"signIn"} action={signup} />
    </main>
  );
}
