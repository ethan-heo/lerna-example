import typescript from 'typescript';
import tsPlugin from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
    {
        input: "src/index.ts",
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
        },
        plugins: [
            tsPlugin({ typescript })
        ]
    }
]