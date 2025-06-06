import { IonImg, IonRow } from "@ionic/react";

import "./AuthLogo.css";

const AuthLogoComponent: React.FC = () => {
  return (
    <IonRow className="logo-height-wrapper ion-justify-content-center ion-padding">
      <IonImg src="images/helphub_logo.png" alt="Logo Help Hub"></IonImg>
    </IonRow>
  );
};

export default AuthLogoComponent;
