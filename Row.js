import React from "react";


// const Row =({id, name , salary, age , image})=> {
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
//             <img alt ="robots" src={`https://robohash.org/${id}?200x200`} />
//             <div>
//                 <h2>
//                     {name}
//                 </h2>
//                 <p>{id}</p>
//                 <p>{image}</p>
//                 <p>{age}</p>
//                 <p>{salary}</p>
//                 <button onClick={employees}/>
//             </div>
//         </div>
//     );
// }

const Row=({employee_name,employee_age,employee_salary, id})=> {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
            <img alt="employees" src={`https://robohash.org/${id}?200x200`} />
            <p>Name= {employee_name} </p>
            <p>Age= {employee_age}</p>
            <p>Salary= {employee_salary}</p>
        </div>
    );

}


export default Row;