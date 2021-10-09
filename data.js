const addStudent = (studentName,id,subject,grade,comment) =>{
    const data = loadData()
    data.push({
        studentName,
        id,
        subject,
        grade,
        comment
    });

    saveData(data);
}
// Add 
const duplicateNames = data.filter((value) => {
    return value.studentName === studentName ;   
});
if(duplicateNames.length === 0){
    data.push({
        studentName,
        id,
        subject,
        grade,
        comment
        });
        saveData(data);
        console.log('Process Success');
    }
    else{
        console.log('Process Fail');
    }
    
// Delete 
const removeData = (id) =>{ 
    const data = loadData(); 
    const dataToKeep =data.filter((value)=>{ 
        return value.id !== id });

    saveNotes(dataToKeep);
    console.log('Process Successful');
} 

// read 
const readData = (id) =>{
    const data = loadData();
    const readStudent = data.find((value1)=>{ 
        return value1.id === id;
    });
    if (readStudent){ 
        console.log(readStudent);
    } else {
        console.log('It is a wrong ID'); 
    }
}


// list note 
const listData = () =>{ 
    const data = loadData(); 
    data.forEach((value2)=>{ 
        console.log("The student name is "+ value2.name +" , The grade is " + value2.grade)
    }
    )};
const loadData = () => { 
    try { 
        const dataBuffer = fs.readFileSync("data.json").toString();
        return JSON.parse(dataBuffer);
        } 
    catch (e) { 
        return [];
    }
}; 
const saveData = (data) => {
    const saveData = JSON.stringify(data);
    fs.writeFileSync("data.json", saveData);
};

module.exports = {
    addStudent,
    removeData,
    readData,
    listData
};



