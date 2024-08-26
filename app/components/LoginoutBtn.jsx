"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../utils/supabse/client";
import { signout } from "../(auth)/auth-actions";

const LoginoutBtn = () => {
  const [user, setUser] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  if (user) {
    return (
      <>
        <button
          onClick={() => {
            signout();
            setUser(null);
          }}
          className="btn-outline primary w-20"
        >
          logout
        </button>
      </>
    );
  }

  return (
    <>
      <Link href="/login">
        <button className="btn-outline primary w-20">Login</button>
      </Link>
    </>
  );
};

export default LoginoutBtn;
