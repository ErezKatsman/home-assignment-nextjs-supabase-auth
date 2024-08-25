import FormCard from "@/app/components/FormCard";
import React from "react";
import { signup } from "./actions";

export default function Signup() {
  return (
    <main>
      <FormCard method={"signIn"} action={signup} />
    </main>
  );
}
