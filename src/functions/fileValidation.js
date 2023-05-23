
async function checkFile(acceptedFiles) {
    return new Promise(function (resolve) {

        const reader = new FileReader();
        reader.onload = () => {
            const csvData = reader.result;
            const lines = csvData.split('\n');
            const headers = lines[0].split(',');
            const result = [];
            for (let i = 1; i < lines.length; i++) {
                const obj = {};
                const currentLine = lines[i].split(',');
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentLine[j];
                }
                result.push(obj);
            }

            if (result.length) {

                var success = 0
                var failed = 0
                const obj = {}

                for (let data of result) {
                    if (data.company_name && data.first_name && data.last_name ) {
                        obj[data.company_name.replace(/[^a-zA-Z0-9\s]/g,'')] = 
                            {
                                company_name: data.company_name,
                                first_name: data.first_name,
                                last_name: data.last_name,
                                company_address: data.company_address || "",
                                company_website: data.company_website || ""
                            }
                        ;
                        success++
                    } else {
                        failed++
                    };
                };
                localStorage.setItem("clientContacts", JSON.stringify(obj));
                localStorage.setItem("fileResult", JSON.stringify({ success: success, failed: failed }));
                resolve(true)

            };
        }
        reader.readAsText(acceptedFiles[0]);
    });
};


export default checkFile
