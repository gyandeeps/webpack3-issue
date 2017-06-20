import { svg1 } from "./svg1";
import { svg2 } from "./svg2";

const clinical1 = {
    svg1
};
const clinical2 = {
    svg2
};

/**
 * Generates a unique id
 * @returns {string} unique id
 * @private
 */
function* idMaker() {
    let cnt = 0;
    while (true) {
        yield `id-${++cnt}`;
    }
}

const gen = idMaker();

export {
    clinical1,
    clinical2,
    gen
};
