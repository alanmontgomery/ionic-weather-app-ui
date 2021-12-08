import { IonCardSubtitle, IonCol, IonIcon, IonNote, IonRow } from "@ionic/react";
import { pulseOutline, sunnyOutline, thermometerOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

export const WeatherProperty = ({type, currentWeather}) => {

  const [property, setProperty] = useState(false);

  const properties = {

    wind: {
      isIcon: false,
      icon: "/assets/wind.png",
      alt: "wind",
      label: "Wind",
      value: `${currentWeather.current.wind_mph}mph`
    },
    feelsLike: {

      isIcon: true,
      icon: thermometerOutline,
      alt: "feels like",
      label: "Feels like",
      value: `${currentWeather.current.feelslike_c}°C`
    },
    indexUV: {

      isIcon: true,
      icon: sunnyOutline,
      alt: "index uv",
      label: "Index UV",
      value: currentWeather.current.uv
    },
    pressure: {

      isIcon: true,
      icon: pulseOutline,
      alt: "pressure",
      label: "Pressure",
      value: `${currentWeather.current.pressure_mb} mbar`
    }
  };

  useEffect(() => {

    setProperty(properties[type]);
  }, [type]);

  return (

    <IonCol size="6">
      <IonRow className="ion-justify-content-center ion-align-items-center">
        <IonCol size="3">
          {!property.isIcon && <img alt={property.alt} src={property.icon} height="32" width="32" />}
          {property.isIcon && <IonIcon icon={property.icon} color="medium" style={{fontSize: "2rem"}} />}
        </IonCol>

        <IonCol size="9">
          <IonCardSubtitle>{property.label}</IonCardSubtitle>
          <IonNote>{property.value}</IonNote>
        </IonCol>
      </IonRow>
    </IonCol>
  );
}