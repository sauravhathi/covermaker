import React, { useCallback } from 'react';
import { toPng } from 'html-to-image';

export default function Download(props: any) {

  // DOM element to be converted to image
  const handleDownload = useCallback(() => {
    if (props.re.current === null) {
      return;
    }
    toPng(props.re.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('oops, something went wrong!', err);
      });
  }, [props.re]);

  return (
    <button className="mt-2 p-2 rounded-sm bg-blue-600 text-white" onClick={handleDownload}>Download</button>
  )
}