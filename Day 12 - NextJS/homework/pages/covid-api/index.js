import axios from 'axios';
export async function getStaticProps() {
    const res = await axios.get('https://api.covid19api.com/total/country/vietnam/status/confirmed');
    return {
        props: {
            covidInfo: res.data
        }
    }
}

export default function CovidHome({ covidInfo }) {
    console.log(covidInfo);
    return (
        <div>
            <h2>COVID-19 Info</h2>
            {covidInfo.map((value) => (
                <p>{value.Date} - {value.Cases}</p>
            ))}
        </div>
    )
}