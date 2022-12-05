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
const download = () => {
    return new Promise((resolve) => {
        console.log('Downloading...')
        setTimeout(() => {
            resolve('file.png')
        }, 5000)
    })
}

const main = async () => {
    file = await download()
    console.log(await showDownload(file))
}

main()
