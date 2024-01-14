const User = ({ imgUrl, imgName, username, hobbies, children}) => {
    return (
        <div>
            <img src={imgUrl} alt={imgName} />
            <h1>Name: {username}</h1>
            <h1>Hobbies: {hobbies}</h1>
            {children}
        </div>
    )
}

export default User;