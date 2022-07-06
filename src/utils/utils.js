export const fetchAllAPIs = async () => {
    const res = await fetch('/entries');
    return res.json();
};

export const fetchCategory = async (category) => {
    const res = await fetch(`/entries?category=${category}`);
    return res.json();
};

export const fetchAPICategories = async () => {
    const res = await fetch('/categories');
    return res.json();
};

export const fetchRandomAPI = async () => {
    const res = await fetch('/random');
    return res.json();
}