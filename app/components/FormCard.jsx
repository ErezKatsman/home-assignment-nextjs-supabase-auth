import Image from "next/image";
import Link from "next/link";
import { signInWithGoogle } from "../(auth)/signup/actions";
import Logo from "./logo.svg";

const content = {
  logIn: {
    title: "Login to your account",
    btn: "Log In",
    text1: "Don’t have an account yet?",
    text2: "Sign Up",
    linkOther: "signup",
  },
  signIn: {
    title: "Signup to an account",
    btn: "Sign Up",
    text1: "Have an account?",
    text2: "login",
    linkOther: "login",
  },
};

const FormCard = ({ method, action }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <Image
          className="self-center"
          src={Logo}
          alt="Smart Storytime"
          width={260}
          quality={110}
        />
        <h1>{content[method].title}</h1>
        <form className="py-6 space-y-4 md:space-y-6">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-lg text-gray-800 bg-slate-200 border block w-full p-2.5 "
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-left block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="rounded-lg text-gray-800 bg-slate-200 border block w-full p-2.5 "
              required={true}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            formAction={action}
          >
            {content[method].btn}
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {content[method].text1}{" "}
            <Link
              href={`/${content[method].linkOther}`}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              {content[method].text2}
            </Link>
          </p>
        </form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-2 text-gray-400">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <form>
          <button
            type="submit"
            formAction={signInWithGoogle}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white p-2 font-bold text-slate-600 outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={18}
              height={18}
            />
            Google
          </button>
        </form>
      </div>
    </>
  );
};

export default FormCard;
