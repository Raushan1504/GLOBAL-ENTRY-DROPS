const LOCATION_ENDPOINT = "https://ttp.cbp.dhs.gov/schedulerapi/locations/?temporary=false&inviteOnly=false&operational=true&serviceName=Global+Entry"

export default async function fetchLocationFecther() {
    try {
        const res = await fetch(LOCATION_ENDPOINT);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching locations:', error);
    }
}



































