// // FETCH THE JSON DATA
// async function fetchEmployees() {
//     try{
//         const response = await fetch ('../data/employees.json')
//         const employees = await response.json()
//         for(let employee of data.employees) {
//             arrEmployees +=
//             `${employee.id}<br>
//              ${employee.name}<br>
//              ${employee.ext}<br>
//              ${employee.email}<br>
//              ${employee.department}<br><br>`
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchEmployees()


// FETCH THE JSON DATA
// async function fetchEmployees() {
//     try {
//         const response = await fetch('../../data/employees.json'); // Corrected path
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json(); // Renamed to `data` for clarity
//         let arrEmployees = ''; // Initialize a string to hold employee details

//         for (let employee of data.employees) { // Use `data.employees`
//             arrEmployees +=
//             `${employee.id}<br>
//              ${employee.name}<br>
//              ${employee.ext}<br>
//              ${employee.email}<br>
//              ${employee.department}<br><br>`;
//         }
//     } catch (error) {
//         console.error('Error fetching employee data:', error);
//     }
// }

// fetchEmployees();

export async function loadEmployees() {
    try {
        const response = await fetch('../data/employees.json'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Return the JSON object
    } catch (error) {
        console.error('Error fetching employee data:', error);
        return null;
    }
}
