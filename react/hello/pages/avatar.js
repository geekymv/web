const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}


function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <h1>{name}'s To Do List for {formatDate(today)}</h1>
    );
}

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';

    return (
        <>
            <TodoList/>
            <img
                className="avatar"
                src={avatar}
                alt={description}
            />
        </>
    );
}