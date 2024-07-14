// P는 Promise 객체를 반환하는 함수의 의미
export const imageFileReaderP = (file:File) => {
    const files = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (e:ProgressEvent<FileReader>) => {
            const result = e.target?.result // base64 인코딩 결과
            if(result && typeof result === 'string') {
                resolve(result)
            }else{
                reject(new Error("imageFileReaderP : can't read image file"))
            }
        }
        fileReader.readAsDataURL(file);
    })
    return files
}
