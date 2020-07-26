import Axios from "axios";

export const addAddressToSessionStorage = (queryString) => {
  return (dispatch) => {
    Axios.get(queryString).then((res) => {
      const data = res.data.items[0];
      const status = res.status;
      switch (status) {
        case 200:
          var newAddress = {
            title: data.title,
            latitude: data.position.lat,
            longitude: data.position.lng,
          };
          const body = {
            key:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsSWRlbnRpdHkiOiJhdGhpdGh5YS52aWR5YXJ0aEBnbWFpbC5jb20ifQ.55vTRNd-P1lcnuNLg6lzgGhgtNbUF-0Ae9s46DBHJ_g",
            latlngs: [[newAddress.latitude, newAddress.longitude]],
          };
          Axios.post(
            "https://data.geoiq.io/dataapis/v1.0/covid/locationcheck",
            body
          ).then((res1) => {
            if (res1.data.data[0].inContainmentZone) {
              newAddress["inContainmentZone"] = "Contained";
            } else {
              newAddress["inContainmentZone"] = "Not Contained";
            }
            newAddress["district"] = res1.data.data[0].district;
            newAddress["districtTotalConfirmed"] =
              res1.data.data[0].districtTotalConfirmed;
            newAddress["districtCurrentActive"] =
              res1.data.data[0].districtCurrentActive;
            dispatch({ type: "SUCCESS", data: { newAddress: newAddress } });
          });
          break;
        case 400:
          dispatch({ type: "BAD_REQUEST" });
          break;
        case 503:
          dispatch({ type: "SERVICE_UNAVAILABLE" });
          break;
        default:
          dispatch({ type: "OTHER" });
      }
    });
  };
};

export const setAsCurrentAddress = (address) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_CURR_ADDRESS",
      data: { currentAddress: address },
    });
  };
};
