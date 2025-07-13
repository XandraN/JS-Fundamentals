const arg = process.argv[2];
const size = parseInt(arg);
if (Number.isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    const row = "X".String(size);
    for (let i = 0; i < size; i++) {
        console.log(row);
    }
}