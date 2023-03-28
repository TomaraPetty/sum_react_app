import React, { useState, useEffect } from 'react';
import '../ui/index.css';

interface FileInputProps {}

const FileInput: React.FC<FileInputProps> = (props: FileInputProps) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [sum, setSum] = useState<number | undefined>(undefined);

  useEffect(() => {
    calculateSum();
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile);
  };

  const calculateSum = async () => {
    if (!file) return;

    const fileContent = await file.text();
    const lines = fileContent.split('\n');
    let total = 0;

    lines.forEach((line, index) => {
      if (index > 0) {
        // Exclude header
        const cells = line.split(',');
        cells.slice(1).forEach(cell => {
          // Exclude first column
          const value = parseInt(cell.trim(), 10);
          if (!isNaN(value)) {
            total += value;
          }
        });
      }
    });

    setSum(total);
  };

  return (
    <div className='page'>
      <div className='split left'>
        <div className='wrapper'>
          <h1 className='h1 header'>Sum The Values</h1>
          <p className='p1'>
            Select a CSV file to upload. We'll calculate the sum of all the
            values in your csv.
          </p>
          <label htmlFor='file-upload' className='upload-button'>
            Upload CSV
          </label>
          <input id='file-upload' type='file' onChange={handleFileChange} />
        </div>
      </div>
      <div className='split right'>
        <div className='wrapper'>
          {sum !== undefined && (
            <>
              <p className='p1'>
                Total of all values in your csv file:
              </p>
              <h1 className='h1 sum-container'>{sum}</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
