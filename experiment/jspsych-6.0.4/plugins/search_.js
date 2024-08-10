const fs = require('fs');
const path = require('path');

function searchTextInJsFiles(directory, searchText) {
    fs.readdirSync(directory).forEach(filename => {
        if (filename.endsWith('.js')) {
            const filePath = path.join(directory, filename);
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes(searchText)) {
                console.log(`Found in file: ${filePath}`);
            }
        }
    });
}


// Replace 'your_directory_path' with the path to the directory containing your JSON files
// Replace 'your_search_text' with the text you want to search for
searchTextInJsFiles('./', 'instructions_before_compcheck');
