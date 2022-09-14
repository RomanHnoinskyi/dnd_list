import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";
import {deleteFile, downloadFile} from "../../../../actions/file";
import sizeFormat from "../../../../utils/sizeFormat";
import {Button} from "@mui/material";
import DeleteIcon  from '@mui/icons-material/Delete';
import {Download} from "@mui/icons-material";

const File = ({file}) => {
const dispatch = useDispatch()
const currentDir = useSelector(state => state.files.currentDir)
const fileView = useSelector(state => state.files.view)

function openDirHandler(file) {
    if(file.type === 'dir') {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file._id))
    }
}

function downloadClickHandler(e) {
    e.stopPropagation()
    downloadFile(file)
}

function deleteClickHandler(e) {
    e.stopPropagation()
    dispatch(deleteFile(file))
}

if (fileView === 'list') {
    return (
        <div className='file' onClick={() => openDirHandler(file)}>
            <img
                src={file.type === 'dir' ? dirLogo : fileLogo}
                alt="" className="file__img"
            />
            <div className="file__name">{file.name}</div>
            <div className="file__size">{sizeFormat(file.size)}</div>
            {file.type !== 'dir' &&
                <Button
                    variant="outlined"
                    size="small"
                    onClick={(e) => downloadClickHandler(e)}
                    startIcon={<Download/>}
                >
                    download
                </Button>}
            <Button
                size="small"
                onClick={(e) => deleteClickHandler(e)}
                variant="outlined"
                startIcon={<DeleteIcon/>}
            >
                delete
            </Button>
        </div>
    );
}
if (fileView === 'plate') {
    return (
        <div className='file-plate' onClick={() => openDirHandler(file)}>
            <img
                src={file.type === 'dir' ? dirLogo : fileLogo}
                alt="" className="file-plate__img"
            />
            <div className="file-plate__name">{file.name}</div>
            <div className="file-plate__btns">
                {file.type !== 'dir' &&
                    <Button
                        size={"small"}
                        onClick={(e) => downloadClickHandler(e)}
                    >
                        download
                    </Button>}
                <Button
                    size={"small"}
                    onClick={(e) => deleteClickHandler(e)}
                >
                    delete
                </Button>
            </div>
        </div>
    );
}

};

export default File;