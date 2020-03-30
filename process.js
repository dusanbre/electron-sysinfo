console.log(process);
let output = `<h2 class='page-header'>App Version Data</h2>
    <ul class='list-group'>
    <li class='list-group-item'>Node: ${process.versions.node}</li>
    <li class='list-group-item'>Chrome: ${process.versions.chrome}</li>
    <li class='list-group-item'>Electron: ${process.versions.electron}</li>
    </ul>
`;
document.getElementById("output").innerHTML = output;
