const generateRGBShade = (color: string, percent: number) => {
    var i = parseInt,
        r = Math.round,
        [a, b, c, d] = color.split(","),
        P: any = percent < 0,
        t: any = P ? 0 : 255 * percent,
        P: any = P ? 1 + percent : 1 - percent;
    return (
        "rgb" +
        (d ? "a(" : "(") +
        r(i(a[3] == "a" ? a.slice(5) : a.slice(4)) * P + t) +
        "," +
        r(i(b) * P + t) +
        "," +
        r(i(c) * P + t) +
        (d ? "," + d : ")")
    );
};

// Example Velvet - rgb(171,20,56)
function generatePalette(color: string) {
    const percents: number[] = [-10, -20, -30, -40, -50, 10, 20, 30, 40];
    const keys: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    const colorPalette = percents.map((percent, idx) => {
        const shade = generateRGBShade(color, percent);
        return { [keys[idx]]: shade };
    })

    return colorPalette;
}

interface ColorTypes {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

const colors = {
    primary: {
        50: "#f7e8eb",
        100: "#eed0d7",
        200: "#d58a9c",
        300: "#c45b74",
        400: "#b32c4c",
        500: "#ab1438",
        600: "#9a1232",
        700: "#89102d",
        800: "#780e27",
        900: "#670c22",
    },
    secondary: {
        50: "#f7e8eb",
        100: "#eed0d7",
        200: "#d58a9c",
        300: "#c45b74",
        400: "#b32c4c",
        500: "#ab1438",
        600: "#9a1232",
        700: "#89102d",
        800: "#780e27",
        900: "#670c22",
    },
    velvet: {
        50: "#f7e8eb",
        100: "#eed0d7",
        200: "#d58a9c",
        300: "#c45b74",
        400: "#b32c4c",
        500: "#ab1438",
        600: "#9a1232",
        700: "#89102d",
        800: "#780e27",
        900: "#670c22",
    }
}

export default colors;

export type ColorShades = ColorTypes;

export {
    colors,
    generatePalette,
}