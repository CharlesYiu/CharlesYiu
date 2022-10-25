// this script appends the necessary elements to the document for a favicon to be set..
// though it is not as efficient, the simplicity of embeding a script with a one-liner outweighs the cost.

/*
html element:
    <script src="https://yiu.ch/favicon.js" defer></script>
*/

/*
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/icon/apple.png?v=5">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon/32x32.png?v=5">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon/16x16.png?v=5">
*/
(() => {
    function main() {
        // move script to expected place
        if (document.head !== document.currentScript.parentElement) document.head.appendChild(document.currentScript)
        // html to embed here
        const container = document.createElement("div")
        container.innerHTML = 
            `<link data-creator="favicon.js" rel="apple-touch-icon" sizes="180x180" href="https://yiu.ch/assets/icon/apple.png?v=5">
             <link data-creator="favicon.js" rel="icon" type="image/png" sizes="32x32" href="https://yiu.ch/assets/icon/32x32.png?v=5">
             <link data-creator="favicon.js" rel="icon" type="image/png" sizes="16x16" href="https://yiu.ch/assets/icon/16x16.png?v=5">`
        // append elements
        const elementCount = container.children.length
        for (let currentCount = 0; currentCount < elementCount; currentCount++) document.head.appendChild(container.children.item(0))
    }
    // make sure the document is loaded before the script runs
    if (typeof document.head === "undefined") window.addEventListener("load", () => main())
    else main()
})()