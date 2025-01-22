import http from "http"

const port = 5000;

const app = http.createServer((req, res) => {

})
// import "./assets/pspdfkit.js";

// // We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
// const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;

// PSPDFKit.load({
//     baseUrl,
//     container: "#pspdfkit",
//     document: "document.pdf"
// })
//     .then(instance => {
//         console.log("PSPDFKit loaded", instance);
//     })
//     .catch(error => {
//         console.error(error.message);
//     });
app.listen(() => {
    console.log('====================================');
    console.log(`Server Started at localhost:${port}`);
    console.log('====================================');
})