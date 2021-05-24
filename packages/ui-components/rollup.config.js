import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const extensions = [".tsx", ".ts"];
const input = "src/index.ts";

const plugins = [
    typescript({
        typescript: require("typescript"),
    }),
];

export default [
    {
        input,
        output: {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
        },
        plugins,
    },
];
