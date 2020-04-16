// axios.get("https://api.covid19india.org/data.json")
// .then((dta)=>{
//     const state=(dta.data.statewise);
//     for(let stat of state){
//         console.log(stat);
//         console.log(stat.state);
//         console.log(stat.active);
//         console.log(stat.deaths);
//         console.log(":::::::::::::::::::::::::::::::::::::::::::::");


//     }
//     console.log(state[0].lastupdatedtime);
// })



//making request in district wise
// const printData=(data)=>{
//     for(let deta of data){
//         console.log(deta);
//         console.log("====================================================");
//     }
// };
// const returndata=(ret)=>{

// }


// :::::::::::::::::District wise data:::::::::::::::
// axios.get("https://api.covid19india.org/v2/state_district_wise.json")
// .then((data)=>{
//     console.log(data.data);
//     const deta=data.data;
//     for(let i=0;i<deta.length;i++){
//         //console.log(deta[i]);
//         var disdata=deta[i].districtData;
//         //console.log(disdata);
//         for(let j;j<disdata.length;j++){
//             printData(disdata);
//         }
//         //printData(disdata);
//     }
// })

// const addToDom=(ele,data)=>{
//     const elSelect=document.querySelector(`${ele}`);
//     //console.log(elSelect);
//     const element=document.createElement('li');
//     const text=element.innerHTML=`${data}`;
//     //console.log(text);
//     //element.appendChild(text);
//     elSelect.appendChild(element);
// }
// function myFunction() {
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
//   }



// axios.get("https://api.covid19india.org/data.json")
// .then((dta)=>{
//     const totalCaseToday=(dta.data.statewise[0]);
//     console.log(totalCaseToday);
//     //console.log("Total active case Today: ",totalActive);
    
//     //const totalConfirmed=totalCaseToday.confirmed;
//     //console.log("Total confirmed case Today: ",totalConfirmed);
//     //const totalDeath=totalCaseToday.deaths;
//     //console.log("Total Death : ",totalDeath);
//     //const totalRecovered=totalCaseToday.recovered;
//     //console.log("Total recovered case :",totalRecovered)
    

//     const totalActive=`Total active case Today : ${totalCaseToday.active}`;
//     addToDom('.container ul.data',totalActive);
//     const totalConfirmed=`Total confirmed case :${totalCaseToday.confirmed}`;
//     addToDom('.container ul',totalConfirmed);
//     const totalDeath=`Total Death Upto Now : ${totalCaseToday.deaths}`
//     addToDom('.container ul',totalDeath);
//     const totalRecovered=`Total recover Upto now : ${totalCaseToday.recovered}`;
//     addToDom('.container ul',totalRecovered);
//     const lastUpdateTime=`Last Update On${totalCaseToday.lastupdatedtime}`;
//     addToDom('.container ul',lastUpdateTime);



// })

// Push to table data

const addToTd=(ele,data)=>{
    const elSelect=document.querySelector(`${ele}`);
    const element=document.createElement('td');
    const text=element.innerHTML=`${data}`;
    elSelect.appendChild(element);
}

//refactoring

axios.get("https://api.covid19india.org/data.json")
.then((dta)=>{
    const totalCaseToday=(dta.data.statewise[0]);
    //console.log(totalCaseToday);
    const totalActive=totalCaseToday.confirmed;
    const totalConfirmed=totalCaseToday.active;
    const totalDeath=totalCaseToday.deaths;
    const totalRecovered=totalCaseToday.recovered;
    const lastUpdateTime=totalCaseToday.lastupdatedtime;
    //calling addtoTd function
    addToTd('.Data',totalActive);
    addToTd(".Data",totalConfirmed);
    addToTd(".Data",totalRecovered);
    addToTd(".Data",totalDeath);
    addToTd(".Data",lastUpdateTime);

    




})


// axios.get('https://api.covid19india.org/data.json')
// .then((data)=>{
//     console.log(data)
// })

