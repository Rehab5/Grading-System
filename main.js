
// const argv = yargs.argv;

console.log("Hello");
const fs = require('fs');
fs.writeFileSync('notes.txt' , "Welcome");
console.log(fs.readFileSync('notes.txt').toString());

const yargs = require('yargs');
const data = require('./data');

// add
yargs.command({
    command:'add',
    describe:'add Student',
    builder:{
        studentName: {
            describe: 'This is student name in add command',
            demandOption: true,
            type: 'string'
        },
        id: {
            describe: 'This is student id in add command',
            demandOption: true,
            type: 'integer'
        },
        subject: {
        describe: 'This is subject in add command',
        demandOption: true,
        type: 'string'
        },
        grade: {
            describe: 'This is grade of subject in add command',
            demandOption: true,
            type:'integer'
        },
        comment: {
            describe: 'This is comment in add command',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv) =>{
        data.addStudent(argv.studentName, argv.id, argv.subject, argv.grade, argv.comment);

    }

});

// Delete
yargs.command({
    command:'delete',
    describe:'delete Student',
    builder:
    {
    id: {
        describe: 'This is student id in delete command',
        demandOption: true,
        type: 'integer'
    }
    },
    handler:(argv) =>{
        data.removeData(argv.studentName, argv.id);
    }
});

// Read
yargs.command({
    command:'read',
    describe:'read Student',
    builder:{
        id: {
            describe: 'This is student id in read command',
            demandOption: true,
            type: 'integer'
        }
    },
    handler:(argv) =>{
        data.readData(argv.studentName, argv.id);
    }
});

//List
yargs.command({
    command:'list',
    describe:'list Student',
    builder:{
        id: {
            describe: 'This is student id in list command',
            demandOption: true,
            type: 'integer'
        }
    },
    handler:(argv) =>{
        data.listData(argv.studentName, argv.id);
    }
});

yargs.parse();