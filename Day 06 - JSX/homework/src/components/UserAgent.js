function UserAgent() {
    // console.log(navigator);
    return (
        <div className="user-agent">
            <p>{navigator.userAgent}</p>
        </div>
    );
}

export default UserAgent;