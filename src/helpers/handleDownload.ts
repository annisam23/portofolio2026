// function for cv downloading
export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/CV_AnnisaMaulidaRahma.pdf';
  link.download = 'CV_AnnisaMaulidaRahma.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
};
