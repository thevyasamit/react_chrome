export default function Profile() {
    const person = {
        name : 'Some Scientist',
        theme : {
            backgroundColor:'yellow'
        }
    };
    return (
        <div className="avatar" style={person.theme}>
            <h1>{person.name}</h1>
            <img src="https://i.imgur.com/MK3eW3As.jpg"/>
        </div>
    );
}
