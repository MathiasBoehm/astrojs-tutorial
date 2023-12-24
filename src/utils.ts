const extractFileName = (path: string) => {
    const nameWithParams = path.split("/").pop();
    return nameWithParams.includes('?') ? nameWithParams.split("?").at(0) : nameWithParams;
};


export {
    extractFileName
}
