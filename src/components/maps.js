import React, { useState } from 'react';
import Landshaft from '../assets/imgs/landy.jpg'
import daraxt from '../assets/imgs/daraxt.jpg'

import './maps.css'; // Rasm va stil uchun CSS fayl
 
import Box from '@mui/material/Box'; 
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function MiniMap() {
  // Ma'lumotlarni saqlash uchun state yaratamiz
  const [info, setInfo] = useState('');
  const handlePointClick = (pointInfo) => {
    setInfo(pointInfo); // Bosilganda ma'lumotlarni o'zgartiramiz
  };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return ( <>   
       <div>
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

           {/* MALUMOTLAR SHUNCHAKI QOLDA YOZILDI VAQTDAN YUTQAZMASLIK UN QILINDI  MAP ORQALI JSON yoki API DAN OB KESA HAM BO'LAR EDI  */}

           <img className='daraxt' src={daraxt} />
            <div className='malumotlar' id="modal-modal-description" sx={{ mt: 2 }}>
              <span className='malumotlarBox'>
             <span>Malumotlar</span>
             <span>Malumotlar</span>
              </span>
              <hr/>
              <span className='malumotlarBox'>
             <span>Malumotlar</span>
             <span>Malumotlar</span>
              </span>
              <hr/>
              <span className='malumotlarBox'>
             <span>Malumotlar</span>
             <span>Malumotlar</span>
              </span>
              <hr/>
              <span className='malumotlarBox'>
             <span>Malumotlar</span>
             <span>Malumotlar</span>
              </span>
              <hr/>
            </div>
          </Box>
        </Modal>
      </div>
 
    <div className="Landy">
      <div className="map-container">
        <img className="landshaft" src={Landshaft} alt="Landshaft" />

        {/* Raqamlar yoki belgilar */}
        <div 
          className="map-point" 
          style={{ top: '47%', left: '30%' }} 
          onClick={handleOpen}
        >
          1
        </div>
        <div 
          className="map-point" 
          style={{ top: '60%', left: '64%' }} 
          onClick={handleOpen}
        >
          2
        </div>
        {/* Qo'shimcha nuqtalarni shu yerga qo'shasiz */}
      </div>

      {/* Ma'lumotlar oynasi */}
     
    </div>
    </>

  );
}

export default MiniMap;
