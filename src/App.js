import './App.css';
import {useDropzone} from 'react-dropzone';
import clsx from 'clsx';

function App() {
  const {
    getRootProps,
    isDragAccept,
    isDragReject,
    isFocused,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    accept: {
      'image/*': [],
    },
  })

  return (
    <div
      {...getRootProps({
        className: clsx("dropzone", {
          ["dropzone-focused"]: isFocused,
          ["dropzone-accept"]: isDragAccept,
          ["dropzone-reject"]: isDragReject,
        })
      })}
    >
      <div className="dropzone-content">
        <h1>
          {
            isDragAccept
              ? 'All files are accepted'
              : isDragReject
                ? 'Some files are rejected'
                : 'Drag and drop files anywhere on the window or click to select files'
          }
        </h1>
        <hr />
        <div className="dropzone-res">
          <div className="dropzone-items">
            <h2>Accepted</h2>
            <ul>
              {
                acceptedFiles.map(f => (
                  <li key={f.name}>{f.path !== "" ? f.path : f.name} ({f.type}) {f.size}</li>
                ))
              }
            </ul>
          </div>
          <div className="dropzone-items">
            <h2>Rejections</h2>
            <ul>
              {
                fileRejections.map(r => (
                  <li key={r.file.name}>
                    {r.file.path !== "" ? r.file.path : r.file.name}
                    <ul>
                      {r.errors.map(e => (<li key={e.code}>{e.message}</li>))}
                    </ul>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
