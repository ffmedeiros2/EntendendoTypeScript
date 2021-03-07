namespace Geometria{
    // é possível declarar namespaces de forma aninhada
    export namespace Area {
        const PI = 3.14
        
        export function retangulo(base: number, altura: number): number {
            return base * altura;
        }
        
    }
}