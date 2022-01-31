
export default function Display({ show }) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {show.map(resultado => <p key={resultado}>{resultado}</p>)}
        </div >
    )
}