export const getBasename = () => {
    const { hostname } = window.location;
    var basename = ""
    if (hostname.includes("react.customdev.solutions")) {
        // basename = "/choosewell"
        basename = "/"
    }
    return basename;
};

// export const ImageUrl = (image: string) => {
//     let { PUBLIC_URL } = process.env;
//     return `${PUBLIC_URL}/images/${image}`;
// };

export const ImageUrl = (image: string) => {
    return `images/${image}`;
};


export const CartImageUrl = (image: string) => {
    const { hostname } = window.location;

    var basename = "/"
    if (hostname.includes("react.customdev.solutions")) {
        basename = "./"
    }
    basename;

    return `${basename}images/${image}`;
};


