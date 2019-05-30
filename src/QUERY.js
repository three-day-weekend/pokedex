const QUERY = {

    parse(query) {
        // declare searchParams with query string using URL search params
        const searchParams = new URLSearchParams(query);
    
        // declare an empty object
        const paramsObj = {};
    
        // get search value from searchParams
        searchParams.forEach((value, key) => {
            paramsObj[key] = value;
        });
    
        // return object with key 'search' and value from URL search params
        return paramsObj;
    },
    
    stringify(queryProps) {
        const searchParams = new URLSearchParams();
    
        Object.keys(queryProps).forEach(key => {
            searchParams.set(key, queryProps[key]);
        });
    
        return searchParams.toString();
    }
};

export default QUERY;