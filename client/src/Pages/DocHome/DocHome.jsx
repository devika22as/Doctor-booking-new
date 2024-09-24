import './DocHome.css';
import axios from '../../utils/axios';
import html2pdf from 'html2pdf.js';
import Sidebar from '../../components/Sidebar/Sidebar';


const DocHome = () => {
  const pdfDownloadClick = async () => {
    const response = await axios.get('/department/pdf');
    html2pdf().from(response.data).save();
  };
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <h1>Doctor Home</h1>
        <button onClick={pdfDownloadClick}>Download PDF</button>
      </div>
    </div>
  );
};

export default DocHome;
