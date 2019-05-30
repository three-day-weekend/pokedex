import QUERY from './QUERY.js';

const hashStorage = {
    get() {
        const hash = window.location.hash.slice(1);
        return QUERY.parse(hash);
    },

    set(queryProps) {
        const target = hashStorage.get();
        Object.assign(target, queryProps);
        window.location.hash = QUERY.stringify(target);
    },

    remove(key) {
        const target = hashStorage.get();
        delete target[key];
        window.location.hash = QUERY.stringify(target);
    }
};

export default hashStorage;