import dts from "rollup-plugin-dts"
import esbuild from "rollup-plugin-esbuild"
import pkg from "./package.json"
import { terser } from "rollup-plugin-terser"

const production = process.env.NODE_ENV === "production"

const name = pkg.main.replace(/\.js$/, "")

const bundle = config => ({
    ...config,
    input: "src/index.ts",
    external: id => !/^[./]/.test(id)
})

export default [
    bundle({
        plugins: [esbuild(), production && terser()],
        output: [
            {
                file: `${name}.js`,
                format: "cjs",
                sourcemap: true
            },
            {
                file: `${name}.mjs`,
                format: "es",
                sourcemap: true
            }
        ]
    }),
    bundle({
        plugins: [dts()],
        output: {
            file: `${name}.d.ts`,
            format: "es"
        }
    })
]
