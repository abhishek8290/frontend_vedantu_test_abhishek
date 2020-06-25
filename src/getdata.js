const axios = require('axios');
axios.get('https://api.github.com/users/supreetsingh247/repos').then(resp => {

    
    const items = resp.data;
    {items.map(item => (
        console.log(item.name)
      ))}
});