function calculateTriangleArea(){
// get triangle base value
let triangleBase = document.getElementById('triangle-base')
let triangleBaseString = triangleBase.value
let triangleBaseNumber = parseFloat(triangleBaseString)

// get triangle height value
let triangleHeight = document.getElementById('triangle-height')
let triangleHeightString = triangleHeight.value
let triangleHeightNumber = parseFloat(triangleHeightString)

let area = 0.5 * triangleBaseNumber * triangleHeightNumber
console.log(area)

// get triangle area

let areaSpan = document.getElementById('triangle-area')
areaSpan.innerText = area;

// validation input

if(isNaN(triangleBaseNumber)){
    alert('please insert a number')
    return;
}

}


// rectangle
function calculateRectangleArea(){
    // get rectangle width
    let rectangleWidth = document.getElementById('rectangle-width')
    let rectangleWidthString = rectangleWidth.value
    let rectangleWidthNumber = parseFloat(rectangleWidthString)
   
    // get rectangle length
    let rectangleLength = document.getElementById('rectangle-length')
    let rectangleLengthString = rectangleLength.value
    let rectangleLengthNumber = parseFloat(rectangleLengthString)
    
    let rectangleArea = rectangleWidthNumber * rectangleLengthNumber

    let rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = rectangleArea
}

function calculateEllipseArea(){
    let ellipseFirst = getInputValue('ellipse-first')
    let ellipseSecond = getInputValue('ellipse-second')
    let area = 3.1416 * ellipseFirst * ellipseSecond
    let areaTwoDecimal = area.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoDecimal)
}


// reusable function --> reduce duplicate code

function calculateParallelogramArea() {
let base = getInputValue('parallelogram-base')
let height = getInputValue('parallelogram-height')

// if(isNaN(base) || isNaN(height)){
//     alert('insert a number please')
//     return;
// }
let area = base * height

setElementInnerText('parallelogram-area', area)

// add to calculation
addToCalculation('parallelogram',area)

addToCalculation('ellipse', areaTwoDecimal)
}

function getInputValue(fieldId){
    let inputField = document.getElementById(fieldId)
    let inputFieldString = inputField.value
    let inputFieldNumber = parseFloat(inputFieldString)
    return inputFieldNumber
}

function setElementInnerText(elementId, area){
let element = document.getElementById(elementId);
element.innerText = area
}

// add to calculation entry

function addToCalculation(areaType, area){
 let calculationEntry = document.getElementById('calculation-entry')
 let p = document.createElement('p')
 p.innerHTML = areaType + ' ' + area;

 calculationEntry.appendChild(p)
}