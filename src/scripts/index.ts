let elements: HTMLCollectionOf<Element> = document.getElementsByTagName("*");
let pattern:RegExp = new RegExp(/(\b\d{4}\b)/gi);

for (let i = 0; i < elements.length; i++) {
    let element:Element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        let node:Node = element.childNodes[j];

        if (node.nodeType === 3) {
            element.replaceChild(document.createTextNode(node.nodeValue.replace(pattern, gregorianToJuche)), node);
        }
    }
}


function gregorianToJuche(gregorian:string):string {
    return (parseInt(gregorian)-1831).toString();
}