import FormCard from "../../components/FormCard";
import { login } from "../auth-actions";

export default function Login() {
  return (
    <main>
      <FormCard method={"logIn"} action={login} />
    </main>
  );
}
