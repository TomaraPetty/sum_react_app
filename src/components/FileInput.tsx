import React, { useState } from 'react';
import "./fileInput.css"

interface FileInputProps {
    
}

const FileInput: React.FC<FileInputProps> = (props: FileInputProps) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [sum, setSum] = useState<number | undefined>(undefined);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile);
  };

  const calculateSum = async () => {
    if (!file) return;

    const fileContent = await file.text();
    const lines = fileContent.split('\n');
    let total = 0;

    lines.forEach((line) => {
      const cells = line.split(',');
      cells.forEach((cell) => {
        const value = parseInt(cell.trim(), 10);
        if (!isNaN(value)) {
          total += value;
        }
      });
    });

    setSum(total);
  };

  return (
    <div>
      <h1>Select a CSV file to upload</h1>
      <label htmlFor="file-upload">
        Upload CSV
      </label>
      <input id="file-upload" type="file" onChange={handleFileChange} />
      <button onClick={calculateSum}>Calculate sum</button>
      {sum !== undefined && (
        <p>
          Total sum: {sum}
        </p>
      )}
    </div>
  );
};

export default FileInput;