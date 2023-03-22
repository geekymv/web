import styles from '../components/about.module.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const isLoggedIn = true

function AdminPanel() {
    return (
        <div>admin panel</div>
    );
}

function LoginForm() {
    return (
        <div>login form</div>
    );
}


function HomePage() {
    let content
    if (isLoggedIn) {
        content = <AdminPanel/>;
    } else {
        content = <LoginForm/>
    }
    return (
        <div>
            {content}
        </div>
    );
}

function MyButton() {

    function handleClick() {
        alert('You click me!');
    }
    return (
        <button onClick={handleClick}>
            click me
        </button>
    );
}

function About() {
    return (
        <div>
            <h1>about {user.name}</h1>
            <HomePage/>
            <img className={styles.avatar}
                 src={user.imageUrl}
                 alt={'Photo of ' + user.name}
                 style={{
                     width: user.imageSize,
                     height: user.imageSize
                 }}
                 />
            <br/>
            <MyButton/>
        </div>
    );
}

export default About