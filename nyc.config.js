module.exports = {
    require: ["./babel.register.js"],
    all: true,
    sourceMap: false,
    instrument: false,
    include: ["src/**/*.ts"],
    exclude: ["src/**/*.spec.ts", "src/*/*/index.ts", "src/**/__test__/*.ts", "src/xray/**/*.ts"],
    reporter: ["none"],
    tempDir: ".nyc_output/unit",
};
