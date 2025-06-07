import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";

import "./HomeTab.css";

import { add, menuOutline, notificationsOutline } from "ionicons/icons";

const HomeTab: React.FC = () => {
  // const logoutHandler = () => {
  //   // Uncomment the following lines to enable logout functionality
  //   // signOut(auth)
  //   //   .then(() => {
  //   //     // Sign-out successful.
  //   //     console.log("User signed out successfully.");
  //   //   })
  //   //   .catch((error) => {
  //   //     // An error happened.
  //   //     console.error("Error signing out:", error);
  //   //   });

  //   console.log("Logout handler called");
  // };

  return (
    <>
      <IonPage>
        <IonHeader
          class="ion-padding-horizontal ion-justify-content-between"
          style={{
            backgroundColor: "#f8f8f8",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <IonRow class="ion-justify-content-between ion-align-items-center">
            <IonImg
              src="images/helphub_logo.png"
              alt="Logo Help Hub"
              style={{ width: "64px", height: "auto" }}
            ></IonImg>

            <IonRow style={{ gap: "8px" }}>
              <IonButton
                fill="clear"
                shape="round"
                onClick={() => console.log("Notifications clicked")}
              >
                <IonIcon
                  slot="icon-only"
                  icon={notificationsOutline}
                  size="large"
                ></IonIcon>
              </IonButton>

              <IonButton
                fill="clear"
                shape="round"
                onClick={() => console.log("Menu clicked")}
              >
                <IonIcon
                  slot="icon-only"
                  icon={menuOutline}
                  size="large"
                ></IonIcon>
              </IonButton>
            </IonRow>
          </IonRow>
        </IonHeader>

        <IonContent fullscreen class="ion-padding-horizontal">
          <IonRow>
            <IonText>
              <h1>Notícias</h1>
            </IonText>
          </IonRow>

          <IonCard>
            <img
              alt="Silhouette of mountains"
              src="images/content/sos-pantanal.png"
            />

            <IonCardHeader>
              <IonCardTitle>SOS Pantanal</IonCardTitle>

              <IonCardSubtitle>Meio Ambiente</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Um dos biomas mais importantes do mundo conta com a mobilização
              coletiva para resistir. O SOS Pantanal direciona esse apoio,
              fortaleça esse movimento e doe!
            </IonCardContent>

            <IonRow class="ion-justify-content-end">
              <IonButton fill="clear">Saiba mais</IonButton>
            </IonRow>
          </IonCard>

          <IonCard>
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
            />

            <IonCardHeader>
              <IonCardTitle>Sem comida, não há vida</IonCardTitle>
              <IonCardSubtitle>A fome tem solução</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Porque 33 milhões de brasileiros estão sem o que comer, hoje,
              segundo o relatório divulgado pela Rede Brasileira de Pesquisa em
              Soberania e Segurança Alimentar e Nutricional (Rede PENSSAN)
            </IonCardContent>

            <IonRow class="ion-justify-content-end">
              <IonButton fill="clear">Saiba mais</IonButton>
            </IonRow>
          </IonCard>

          <IonRow class="ion-padding"></IonRow>
          <IonRow class="ion-padding"></IonRow>
        </IonContent>

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonButton color={"primary"}>
            <IonText style={{ marginRight: "8px" }}>Doar</IonText>

            <IonIcon icon={add} />
          </IonButton>
        </IonFab>
      </IonPage>
    </>
  );
};

export default HomeTab;
