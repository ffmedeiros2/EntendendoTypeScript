"use strict";
var Geometria;
(function (Geometria) {
    // é possível declarar namespaces de forma aninhada
    let Area;
    (function (Area) {
        const PI = 3.14;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaRect.js.map