module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/airbnb"],
    plugins: [
        'vue'
    ],
    rules: {
        "vue/no-unused-components": ["error", {
            "ignoreWhenBindingPresent": false
        }],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-shadow": ["error", {"allow": ["state"]}],
        "max-len": [2, 180, 4],
        "eol-last": 0,
        'no-extra-semi':0,
        'indent': 0,
        "quotes": [1, "double"],
        "semi": [2, "never"],// 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
        "no-param-reassign": [2, { "props": false }],//变量不检测
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "ignore",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }]
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
