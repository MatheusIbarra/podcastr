//

export default function Home(props) {
    console.log(props.episodes)

     return (
        <h1>Hello World</h1>
    )
}

export async function getStatisProps() {
    const response = await  fetch('http://localhost:3333/episodes');
    const data = await response.json();

    return {
        props: {
            episodes: data,
        },
        revalidate: 60 * 60 * 8,
    }
}