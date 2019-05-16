export class LocalStorageService<T> {

    constructor(private key: string) {
    }
    saveItemsToLocalStorage(items: Array<T> | T) {
        const savedItems = localStorage.setItem(this.key, JSON.stringify(items));
        return savedItems;
    }

    getItemsFromLocalStorage() {
        const savedItems = JSON.parse(localStorage.getItem(this.key));
        return savedItems;
    }

    clearItemFromLocalStorage() {
        localStorage.clear();
    }
}
