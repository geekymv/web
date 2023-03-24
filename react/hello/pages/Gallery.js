function Profile() {
    return (
        <img
            src="https://avatars.githubusercontent.com/u/4549602?v=4"
            alt="Katherine Johnson"
            style={{marginLeft: '10px', width: '100px', height: '100px'}}
        />
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    )
}



