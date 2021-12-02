// network request
const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'f7a3b638',
            s: 'avengers'
        }
    });

    console.log(response.data);
};

fetchData();