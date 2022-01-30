    return (

        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.id}</h2>
                <p>{user.email}</p>
                <p>{user.sub}</p>
                
                <JSONPretty data={user} />
                
        </div>
        )

    )