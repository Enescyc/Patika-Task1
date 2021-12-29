import axios from "axios";

async function getData(number) {
    if (Number.isInteger(number)) {

        try {
            return new Promise(async (resolve, reject) => {
                const { data: user, status: userStatus } = await axios.get("https://jsonplaceholder.typicode.com/users/" + number)
                const { data: posts, status: postsStatus } = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + number)
                const userPosts = {
                    user,
                    posts,
                }

                resolve(userPosts)

            })
        }

        catch (e) {
            console.log(e);
        }

    }
    else{
        console.log("Please enter an Integer and be greater than 0 ");
        
    }


}


export default getData;