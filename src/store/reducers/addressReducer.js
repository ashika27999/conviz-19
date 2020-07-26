const getAddressLog = () => {
  if (localStorage.getItem("addressLog")) {
    return JSON.parse(localStorage.getItem("addressLog"));
  } else {
    return [];
  }
};

const initState = {
  addressLog: getAddressLog(),
  error: null,
  currentAddress: {
    title: "Center",
    latitude: 0,
    longitude: 0,
    inContainmentZone: true,
    district: "NA",
    districtTotalConfirmed: 0,
    districtCurrentActive: 0,
  },
};

const addressReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS":
      const addressLog = [...state.addressLog];
      addressLog.push(action.data.newAddress);
      var currentAddress = action.data.newAddress;
      localStorage.setItem("addressLog", JSON.stringify(addressLog));
      return {
        ...state,
        addressLog,
        currentAddress,
      };
    case "BAD_REQUEST":
      return {
        ...state,
        error: "Bad Request",
      };
    case "SERVICE_UNAVAILABLE":
      return {
        ...state,
        error: "Service Unavailable",
      };
    case "CHANGE_CURR_ADDRESS":
      currentAddress = action.data.currentAddress;
      return {
        ...state,
        currentAddress,
      };
    default:
      return state;
  }
};

export default addressReducer;
