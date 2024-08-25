import FormCard from "@/app/components/FormCard";
import { login } from "./actions";

export default function Login() {
  return (
    <main>
      <FormCard method={"logIn"} action={login} />
    </main>
  );
}
