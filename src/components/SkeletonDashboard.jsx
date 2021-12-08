import {IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonNote, IonRow, IonSkeletonText, IonText, IonThumbnail } from "@ionic/react";
import { pulseOutline, sunnyOutline, thermometerOutline } from "ionicons/icons";

export const SkeletonDashboard = () => (

  <IonGrid>
    <IonCard>
      <IonCardContent className="ion-text-center">
      
        <IonText color="primary">
          <h1>
            <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
          </h1>
        </IonText>

        <div className="ion-margin-top">
          
          <IonThumbnail>
            <IonSkeletonText animated style={{width: "2rem", height: "2rem"}} />
          </IonThumbnail>
          
          <IonText color="dark">
            <h1 style={{fontWeight: "bold"}}>
              <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
            </h1>
          </IonText>
          
          <IonText color="medium">
            <p>
              <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
            </p>
          </IonText>
        </div>

        <IonCardTitle style={{fontSize: "3rem"}} className="ion-margin-top">
          <IonSkeletonText animated style={{height: "3rem", width: "30%", textAlign: "center"}} />
        </IonCardTitle>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
                <IonCol size="3">
                  <img alt="wind" src="/assets/wind.png" height="32" width="32" />
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Wind</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
                <IonCol size="3">
                  <IonIcon icon={thermometerOutline} color="medium" style={{fontSize: "2rem"}} />
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Feels like</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
                <IonCol size="3">
                  <IonIcon icon={sunnyOutline} color="medium" style={{fontSize: "2rem"}} />
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Index UV</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
                <IonCol size="3">
                  <IonIcon icon={pulseOutline} color="medium" style={{fontSize: "2rem"}} />
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Pressure</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  </IonGrid>
);