// const add = (a:number, b:number)=> a + b;
// console.log(add(3,4));

// Fecch Api
async function getResource(url: string): Promise<any> {
    try {
        let res = await fetch(url);
        let data = res.json();
        return data;
    } catch (error:any) {
        console.log(error.Message);
    }
}

let getData = getResource("")

// An Object Type
function areaRect(area: {l: number, b: number, c?: boolean}) {
    return area.l * area.b
}

// areaRect({l:50, b:40})


// Union
// let age: string|number = 5
function union(id: string | number) {
    if (typeof id === 'string') {
        return id.toLocaleUpperCase
    } else {
        return id 
    }
}