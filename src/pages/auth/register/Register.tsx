import { useEffect, useState } from "react";

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonList,
  IonPage,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { ToastComponent } from "../../../components/toast";

import { AuthLogoComponent } from "../components/auth-logo";

import "./Register.css";
import { FormValidators } from "../../../utils";

const RegisterPage: React.FC = () => {
  const [isToastOpened, setIsToastOpened] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"alert" | "success">("alert");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword,
    confirmPasswordErrorText,
  } = FormValidators();

  useEffect(() => {
    if (isValidEmail && isValidPassword && isValidConfirmPassword)
      return setIsDisabled(false);

    setIsDisabled(true);
  }, [isValidEmail, isValidPassword, isValidConfirmPassword]);

  const createUserHandler = () => {
    setIsLoading(true);

    console.log(
      "%c | createUserHandler | email:",
      "background: black; color: lime",
      email
    );
    
    console.log(
      "%c | createUserHandler | password:",
      "background: black; color: lime",
      password
    );
    // createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     console.log(
    //       "%c | .then | userCredential.user:",
    //       "background: black; color: lime",
    //       userCredential.user
    //     );

    //     setIsToastOpened(true);
    //     setToastMessage("Usuário criado com sucesso!");
    //     setToastType("success");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     console.log(
    //       "%c | loginHandler | errorCode:",
    //       "background: black; color: lime",
    //       errorCode
    //     );

    //     setIsToastOpened(true);
    //     setToastMessage("Usuário ou senha inválidos");
    //     setToastType("alert");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <IonPage>
      <IonHeader id="header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>

          <IonTitle>Nova conta</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid className="login-title">
          <AuthLogoComponent />

          <IonRow>
            <h1>Vamos criar seu registro...</h1>
          </IonRow>

          <IonRow>
            <p>Você está a um passo de ser o mais novo membro do clube 😎</p>
          </IonRow>
        </IonGrid>

        <IonList>
          <IonInput
            className={`
                ${isValidEmail && "ion-valid"} 
                ${!isValidEmail && "ion-invalid"} 
                ${isEmailTouched && "ion-touched"}
              `}
            type="email"
            label="E-mail"
            placeholder="seu@email.com"
            errorText="O email é inválido"
            clearInput={true}
            onIonInput={(event) => validateEmail(event, setEmail)}
            onIonBlur={() => setIsEmailTouched(true)}
          ></IonInput>

          <IonInput
            className={`
                ${isValidPassword && "ion-valid"} 
                ${!isValidPassword && "ion-invalid"} 
                ${isPasswordTouched && "ion-touched"}
              `}
            type="password"
            label="Senha"
            placeholder="digite sua senha"
            errorText="A senha é inválida"
            clearInput={true}
            onIonInput={(event) => validatePassword(event, setPassword)}
            onIonBlur={() => setIsPasswordTouched(true)}
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>

          <IonInput
            className={`
                ${isValidConfirmPassword && "ion-valid"} 
                ${!isValidConfirmPassword && "ion-invalid"} 
                ${isConfirmPasswordTouched && "ion-touched"}
              `}
            type="password"
            label="Confirmar Senha"
            placeholder="confirme sua senha"
            errorText={confirmPasswordErrorText}
            clearInput={true}
            onIonInput={(event) =>
              validateConfirmPassword(event, password, isConfirmPasswordTouched)
            }
            onIonBlur={() => setIsConfirmPasswordTouched(true)}
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
        </IonList>

        <IonGrid className="ion-padding-vertical"></IonGrid>

        {!isLoading ? (
          <IonButton
            expand="block"
            disabled={isDisabled}
            onClick={createUserHandler}
          >
            Criar conta
          </IonButton>
        ) : (
          <IonButton expand="block" disabled={true}>
            <IonSpinner name="dots"></IonSpinner>
          </IonButton>
        )}

        <ToastComponent
          isOpen={isToastOpened}
          onClose={setIsToastOpened}
          message={toastMessage}
          type={toastType}
        />
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
