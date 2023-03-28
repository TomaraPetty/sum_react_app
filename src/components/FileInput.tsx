import React, { useState, useEffect } from 'react';

interface FileInputProps {
  setSum: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const FileInput: React.FC<FileInputProps> = ({ setSum }: FileInputProps) => {
  const [file, setFile] = useState<File | undefined>(undefined);

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
    <>
      <label htmlFor='file-upload' className='upload-button'>
        Upload CSV
      </label>
      <input id='file-upload' type='file' onChange={handleFileChange} />
    </>
  );
};

export default FileInput;
