### Steps to run the project:

```bash
npm install
```

```bash
npm start
```

The autocomplete calls an external API (https://random-data-api.com). 

I've implemented all filters based in a response that retrieves all users, but in a real situation I would consider that this filter
logic should be applied on the Backend. For example:

```javascript
    fetch(`${API_URL}/users?search=${searchTerm}`).then(res=> ...)
```