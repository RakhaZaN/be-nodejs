/**
 * Show the result of download
 * 
 * @param result (string)
 */
const showDownload = (result) => {
    return new Promise((resolve) => {
        resolve(`Done... \nFile Downloaded: ${result}`)
    })
}

/**
 * Download file
 * 
 * @param callShowDownload (function)
 */
const download = (callShowDownload) => {
    return new Promise((resolve) => {
        console.log('Downloading...')
        setTimeout(() => {
            const result = "windowns-10.exe"
            resolve(callShowDownload(result))
        }, 5000)
    })
}

const main = async () => {
    console.log(await download(showDownload))
}

main()
