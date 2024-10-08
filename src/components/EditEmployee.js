import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Edit  
    </button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form id='editModal' className="max-w-sm mx-auto">
  <div className="mb-5">
    <label
     for="name"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Name:
    </label>
    
    <input
     type="text"
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="new name" 
      
     />

<label
     for="role"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Role:
    </label>
    
    <input
     type="text"
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="new role" 
      
     />
    
    {/* <button type="submit" className="text-white bg-purple-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}


  </div>
  </form>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={handleClose} className='bg-slate-200 hover:bg-slate-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' form="editModal" >close</button>

          <button className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' form="editModal" >update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;