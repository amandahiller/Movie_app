// network request
const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'f7a3b638',
            i: 'tt0848228'
        }
    });

    console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    event.target.value;
});