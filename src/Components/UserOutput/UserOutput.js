import '../UserOutput/UserOutput.css'

const UserOutput = (props) => {
    return(
        <div>
            <h1>Hello <code className="style">{props.username}</code>!</h1>
            <p>Here we are passing challenges.</p>
        </div>
    )
};

export default UserOutput;