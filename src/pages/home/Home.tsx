import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { Route } from "react-router";

import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

import { ellipse, homeOutline, square } from "ionicons/icons";

import HomeTab from "./tabs/HomeTab";

const HomePage: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home/home-tab">
          <HomeTab />
        </Route>

        <Route exact path="/home/tab2">
          <Tab2 />
        </Route>

        <Route path="/home/tab3">
          <Tab3 />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/home/tab1">
          <IonIcon aria-hidden="true" icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/home/tab2">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>Solicitações</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/home/tab3">
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default HomePage;
