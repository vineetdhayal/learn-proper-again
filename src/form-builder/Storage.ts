export const Storage = {
    getData: (key: any) => {
        return JSON.parse(localStorage.getItem(key) as any) || [];
    },
    setData: (key: any, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    clearData: () => {
        localStorage.clear();
    }
}