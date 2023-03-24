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
// JSX 要求
// 1.一个组件只能返回单个元素，可以使用 <div></div> 或者 <></> 包裹，<></> 空标签叫做 Fragment
// 2.需要关闭所有标签
// 3.使用驼峰，保留字 class 需要替换成 className
// 4.html 转 jsx 工具 https://transform.tools/html-to-jsx
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