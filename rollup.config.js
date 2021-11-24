import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import babel from "@rollup/plugin-babel";

const autoPrefixer = require("autoprefixer");
const entry_point = "src/index.js";

var MODE = [
    {
        format: "cjs",
    },
    {
        format: "esm",
    },
    {
        format: "umd",
    },
];

var config = [];

MODE.map((m) => {
    var conf = {
        input: entry_point,
        output: {
            name: "react-mdr",
            file: `dist/index.${m.format}.js`,
            format: m.format,
            exports: "auto",
            globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "prop-types": "PropTypes",
            },
        },
        // prevent rollup from compiling React files
        external: ["react", "react-dom", "prop-types", /@babel\/runtime/],
        plugins: [
            babel({
                exclude: "node_modules/**",
                plugins: ["@babel/transform-runtime"],
                babelHelpers: "runtime",
            }),
            sourcemaps(),
            terser(),
            styles({
                postcss: {
                    plugins: [autoPrefixer()],
                },
            }),
        ],
    };

    config.push(conf);
});

export default [...config];
