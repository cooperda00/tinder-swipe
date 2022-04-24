import { FirebaseError } from "firebase/app";
import { signIn } from "modules/auth";
import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    setErrorMessage("");
    setLoading(true);

    try {
      await signIn(email, password);
    } catch (e) {
      const { code, message } = e as FirebaseError;
      console.error(`${code} Error : ${message}`);
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
    errorMessage,
    loading,
  };
};
