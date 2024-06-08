/*
Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
including properties unique to each shape.
Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, 
such as the details of different shapes.
*/
type Radius = {
    kind: "circle" | "rectangle"
    radius?: number;
    width?: number;
    height?: number;
};

let circle: Radius = {
    kind: "circle",
    radius: 23  
};

let rectangle: Radius = {
    kind: "rectangle",
    radius: 11,
    width: 12,
    height: 8
};
console.log(circle);
console.log(rectangle);



//more example
type Phone = {
    company: "Samsung" | "Vivo" | "Infinix";
    price?: number;
    color?: string;
    model?: string;
    isProved?: boolean;
}


let samsung: Phone = {
    company: "Samsung",
    price: 1000,
    color: "Black",
    model: "S21",
    isProved: true
}

let vivo: Phone = {
    company: "Vivo",
    color: "White",
    model: "s100",
    isProved: true
}

let infinix: Phone = {
    company: "Infinix",
    price: 5000,
    color: "Black",
    isProved: false
}

console.log(samsung);
console.log(vivo);
console.log(infinix);