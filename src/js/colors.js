
export default function Colors() {

    const hexColors = [];

    for (let r = 0; r <= 255; r++) {
        for (let g = 0; g <= 255; g++) {
            for (let b = 0; b <= 255; b++) {
                const hex = '#' + padZero(r.toString(16)) + padZero(g.toString(16)) + padZero(b.toString(16));
                hexColors.push(hex);
            }
        }
    }

    function padZero(str) {
        return str.length < 2 ? '0' + str : str;
    }

    return hexColors;
}
