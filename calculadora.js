function soma() {
    let a = Number(document.getElementById("fatorA").value);
    let b = Number(document.getElementById("fatorB").value);

    document.getElementById("resultado").innerText = a + b;
}
function subtracao() {
    let a = Number(document.getElementById("fatorA").value);
    let b = Number(document.getElementById("fatorB").value);

    document.getElementById("resultado").innerText = a - b;
}
function multiplicacao() {
    let a = Number(document.getElementById("fatorA").value);
    let b = Number(document.getElementById("fatorB").value);

    document.getElementById("resultado").innerText = a * b;
}
function divisao() {
    let a = Number(document.getElementById("fatorA").value);
    let b = Number(document.getElementById("fatorB").value);

    document.getElementById("resultado").innerText = a / b;
}