const { blue, grey } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: blue[700]
                },
                favColor: {
                    main: grey[300]
                }
            }
            : {
                // palette values for dark mode
                primary: {
                    main: blue[900]
                },
                favColor: {
                    main: grey[800]
                }
            }),
    },

});

export default getDesignTokens;