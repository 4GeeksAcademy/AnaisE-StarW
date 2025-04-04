/* 
    General Styles
*/

/* Estilos para el modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    position: relative;
  }
  
  .modal-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  .modal-top-section {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .modal-avatar {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-right: 20px;
  }
  
  .modal-name-section {
    flex: 1;
  }
  
  .modal-name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .modal-lorem-text {
    font-size: 14px;
    color: #666;
  }
  
  .modal-bottom-section {
    border-top: 1px solid #eee;
    padding-top: 20px;
  }
  
  .modal-info-row {
    margin-bottom: 10px;
    font-size: 16px;
  }