import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// import { signOut } from "firebase/auth";

// import { auth } from "../../services";

import "./Tab1.css";

const Tab1: React.FC = () => {
  const logoutHandler = () => {
    // Uncomment the following lines to enable logout functionality
    // signOut(auth)
    //   .then(() => {
    //     // Sign-out successful.
    //     console.log("User signed out successfully.");
    //   })
    //   .catch((error) => {
    //     // An error happened.
    //     console.error("Error signing out:", error);
    //   });

    console.log("Logout handler called");
  };

  return (
    <IonPage>
      <IonHeader collapse="condense" class="ion-padding">
        <IonToolbar>
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-padding">
        <IonButton expand="block" onClick={logoutHandler}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
