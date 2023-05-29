
import axios from 'axios';

async function getNearestEstablishmentsInfo({setEstablishments, locationInfo}) {
    const req = await axios.post("/api/establishment/location/nearest", {lat: locationInfo.lat, lon: locationInfo.lon});
    const res = await req.data;
    setEstablishments(res);
}

export default getNearestEstablishmentsInfo