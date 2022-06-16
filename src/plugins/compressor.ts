import Compressor from 'compressorjs';
export function compressor (file: any, callback: Function) {
    return new Promise((res, rej) => {
        new Compressor(file, {
            quality: 0.5,
            success(result) {
                const formData = new FormData();
                // The third parameter is required for server
                formData.append('file', result, result.name);
                console.log(result);
                // Send the compressed image file to server with XMLHttpRequest.
                res(callback(formData))
            },
        })
    })
} 