import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

function Github() {

    const githubData = useLoaderData()

    // const [githubData, setGithubData] = useState([]);
    
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/AdarshJha-1`)
    //     .then((res) => res.json())
    //     .then(data => setGithubData(data))
    // }, [])

console.log(githubData);

    return (
        <>
            <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl00000">Github Followers: {githubData.followers}</div>
            <div className="flex justify-center text-center">
                <img src={githubData.avatar_url} alt="" />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/AdarshJha-1`)
    return await response.json();
}