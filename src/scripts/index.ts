let elements: HTMLCollectionOf<Element> = document.getElementsByTagName("*");
let year:RegExp = new RegExp(/(\b\d{4}\b)/gi);
let alreadyJuche:RegExp = new RegExp(/(J\.C\.)/gi);

setInterval(updateCalender, 600);

function updateCalender() {
    for (let i = 0; i < elements.length; i++) {
        let element:Element = elements[i];
        for (let j = 0; j < element.childNodes.length; j++) {
            let node:Node = element.childNodes[j];
            if (node.nodeType === 3) {
                if (node.nodeValue.match(year) && !node.nodeValue.match(alreadyJuche)) {
                    node.nodeValue = node.nodeValue.replace(year, gregorianToJuche);
                }
            }
        }
    }
}

function gregorianToJuche(gregorian:string):string {
    return (parseInt(gregorian)-1911).toString() + " J.C.";
}
