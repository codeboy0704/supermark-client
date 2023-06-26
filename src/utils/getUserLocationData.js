export function getUSerLocationData(setGeoLocation){
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
         setGeoLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
      })
    }else{
      console.log("No se pudo obtener la ubicación");
    }
}