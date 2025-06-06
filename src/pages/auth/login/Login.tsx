import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonList,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";

import { lockClosed, logoGoogle, personCircle } from "ionicons/icons";

import { AuthLogoComponent } from "../components/auth-logo";

import "./Login.css";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid className="login-title">
          <AuthLogoComponent />

          <IonRow className="ion-justify-content-center">
            <h1>Quem bom te ter por aqui!</h1>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <p>Acesse sua conta para usar o app.</p>
          </IonRow>
        </IonGrid>

        <IonList className="login-form">
          {/* Configurar */}
          {/* <IonButton expand="block" color="danger">
            <IonIcon slot="start" icon={logoGoogle}></IonIcon>

            <IonText>Entrar com o Google</IonText>
          </IonButton> */}

          <IonCol class="ion-padding"></IonCol>

          <IonButton expand="block" routerLink="/login-with-password">
            <IonIcon
              slot="start"
              icon={lockClosed}
              className="ion-align-self-start"
            ></IonIcon>

            <IonText>Entrar com o E-mail e Senha</IonText>
          </IonButton>

          <IonCol class="ion-padding"></IonCol>

          <IonButton fill="clear" expand="block" routerLink="/register">
            <IonIcon
              slot="start"
              icon={personCircle}
              className="ion-align-self-start"
            ></IonIcon>

            <IonText>Criar nova conta</IonText>
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
