const args = process.argv.length - 2; // Subtract 2 to exclude node and script path
if (args === 0) {
    console.log("No argument");
} else if (args === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

