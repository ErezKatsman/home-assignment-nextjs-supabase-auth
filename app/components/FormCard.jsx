import Link from "next/link";

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

const FormCard = ({ method }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <h1>{content[method].title}</h1>
        <form className="py-6 space-y-4 md:space-y-6" action="#">
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
            className="w-full text-white bg-purple-700 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
      </div>
    </>
  );
};

export default FormCard;
