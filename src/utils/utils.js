export const fetchAllAPIs = async () => {
    const res = await fetch('https://api.publicapis.org/entries');
    return res.json();
};

export const fetchAPICategories = async () => {
    const res = await fetch('https://api.publicapis.org/categories');
    return res.json();
};

export const fetchRandomAPI = async () => {
    const res = await fetch('https://api.publicapis.org/random');
    return res.json();
}