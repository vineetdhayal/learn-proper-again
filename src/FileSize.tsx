import React from 'react'

const FileSize = () => {
    return (
        <div>
            <input type='file' accept='image/*' onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    if (e.target.files[0].size > 1000 * 1024) {
                        console.error('File Size not allowed to upload');
                        return false;
                    }
                }
            }}></input>
        </div>
    )
}

export default FileSize
