import { useState } from "react";

export const FormValidators = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [isValidPassword, setIsValidPassword] = useState<boolean>();
  const [isValidConfirmPassword, setIsValidConfirmPassword] =
    useState<boolean>();

  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");

  const validateRegexEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validateEmail = (
    event: Event,
    setEmail: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = (event.target as HTMLInputElement).value;

    setIsValidEmail(undefined);

    if (value === "") return;

    if (validateRegexEmail(value) !== null) {
      setIsValidEmail(true);
      setEmail(value);

      return;
    }

    setIsValidEmail(false);
  };

  const validatePassword = (
    event: Event,
    setPassword: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = (event.target as HTMLInputElement).value;

    setIsValidPassword(undefined);

    if (value === "") return;

    if (value.length >= 6) {
      setPassword(value);
      setIsValidPassword(true);

      return;
    }

    setIsValidPassword(false);
  };

  const validateConfirmPassword = (
    event: Event,
    password: string,
    isConfirmPasswordTouched: boolean
  ) => {
    const value = (event.target as HTMLInputElement).value;

    setIsValidConfirmPassword(undefined);

    if (value === "" && !isConfirmPasswordTouched) return;

    if (value === "" && isConfirmPasswordTouched)
      return setConfirmPasswordErrorText(
        "O campo de confirmação de senha não pode estar vazio"
      );

    if (value === password) {
      setIsValidConfirmPassword(true);

      return;
    }

    setConfirmPasswordErrorText("As senhas não coincidem");

    setIsValidConfirmPassword(false);
  };

  return {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword,
    confirmPasswordErrorText,
  };
};
