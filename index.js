const makeDir = require('make-dir');

Promise.all([
    makeDir('src/GravyRepository'),
    makeDir('src/GravyRepository/Controllers'),
    makeDir('src/GravyRepository/Helpers'),
    makeDir('src/GravyRepository/Types'),
    makeDir('src/DataProvider'),
    makeDir('src/DataProvider/Ajax')
]).then(paths => {
    console.log(paths);

});